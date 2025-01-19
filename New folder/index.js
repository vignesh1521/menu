
const express = require('express');
const { validateJWT, generateJWT } = require('./jwt_token');
const {resume_id} =require('./crypto')
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Node.js');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Running on port " + PORT)
    }

})

app.get('/', (req, res) => {
    res.send('hello world')
})
app.post('/api/save/template',async (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    try{
        const decoded_token = validateJWT(token)
        let {temp_id, data } = req.body
        
        let user_id = decoded_token.userId;
        const jsonData = JSON.stringify(data);
        let resumeID=await resume_id();
        
        const query = 'INSERT INTO data (user_id,data,resume_id,temp_id) VALUES (?, ?, ?, ?)';
    
        db.query(query, [user_id,jsonData,resumeID,temp_id], (err, result) => {
            if (err) {
                console.error('Error inserting into the database:', err);
                res.status(500).json({ error: 'Database error' });
            } else {
                console.log('Data inserted successfully:', result);
                res.json({ 
                    status: "success",
                    msg: "Resume Stored successfully" });
            }
        });
    }catch(err){

        res.json({
            status: "failed",
            msg: "Invalid or expired token"
        })
    }   
})

app.patch('/api/update/resume',async (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    try{
        const decoded_token = validateJWT(token)
        let {temp_id, data, resume_id} = req.body
        
        let user_id = decoded_token.userId;
        const jsonData = JSON.stringify(data);
        
        let query = `
        UPDATE \`data\` 
        SET data = ?, temp_id = ?
        WHERE resume_id = ? AND user_id = ?
    `;
        console.log(jsonData);
        
        db.query(query, [jsonData,temp_id,resume_id,user_id], (err, result) => {
            if (err){
                console.error('Error inserting into the database:', err);
                res.status(500).json({ error: 'Database error' });
            } else {
                console.log('Data inserted successfully:', result);
                res.json({ 
                    status: "success",
                    msg: "Resume Stored successfully"});
            }
        });
    }catch(err){
        console.log(err);
        res.json({
            status: "failed",
            msg: "Invalid or expired token"
        })
    }   
})
app.delete('/api/delete/resume', async (req, res) => {
    const { resume_id } = req.body; // Extracting `resume_id` from request body

    if (!resume_id) {
        console.log(error);

        return res.status(200).json({
            status: "failed",
             msg: "resume_id is required"
        });
    }

    try {
        const query = 'DELETE FROM `data` WHERE resume_id = ?';

        db.query(query, [resume_id], (err, result) => {
            console.log(result);
            
            if (err) {
        

                console.error('Error deleting from the database:', err);
                res.status(200).json({ error: 'Database error' });
            } else {
                if (result.affectedRows > 0) {
                    res.json({
                        status: "success",
                        msg: `Resume with ID ${resume_id} deleted successfully`
                    });
                } else {
                    res.json({
                        status: "failed",
                        msg: `No resume found with ID ${resume_id}`
                    });
                }
            }
        });
    } catch (error) {
        
        res.status(200).json({
            status: "failed",
            msg: "An error occurred"
        });
    }
});
app.post('/api/login', (req, res) => {

    try {
        let { mail_id, password } = req.body;
    
        if (!mail_id || !password) {
            throw new Error("Mail Id or Password not provided");
        }
    
        let query = `SELECT * FROM user_details WHERE mail_id = ?`;
        db.query(query, [mail_id], (err, results) => {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    msg: "Unknown error occurred",
                });
                return;
            }
    
            if (results.length === 0) {
                res.json({
                    status: "Login Failed",
                    msg: "Mail Id or password is incorrect",
                });
                return;
            }
    
            // Find the entry where the password matches the user_token
            const matchingEntry = results.find((entry) => password === entry.user_token);
    
            if (matchingEntry) {
                const jwt_token = generateJWT(matchingEntry.user_id); // Use user_id of the matching entry
                res.json({
                    status: "success",
                    auth_token: jwt_token,
                });
            } else {
                res.json({
                    status: "Login Failed",
                    msg: "Mail Id or password is incorrect",
                });
            }
        });
    } catch (err) {
        res.json({
            status: "failed",
            msg: "Enter all the fields"
        })
    }
})

app.get('/api/user', (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    try {
        const decoded_token = validateJWT(token)
        res.json({
            status: "success",
            msg: "user alive"
        })

    } catch (error) {
        res.json({
            status: "failed",
            msg: "Invalid or expired token"
        })

    }
})

app.get('/api/user/resumes',(req,res)=>{
    const token = req.header('Authorization')?.replace('Bearer ', '');

    try {
        const decoded_token = validateJWT(token)
        const query = 'SELECT * FROM data WHERE user_id=? ORDER BY `s.no`';
        db.query(query,[decoded_token.userId],(err,result)=>{            
            res.json(result.reverse()) 
        })

    } catch (error) {        
        res.json({
            status: "failed",
            msg: "Invalid or expired token"
        })

    }
})

app.get('/api/user/resumes/data/:id', (req, res) => {
    try {
        // Retrieve and validate the Authorization token
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(200).json({
                status: "failed",
                msg: "Unauthorized access: Token is missing",
            });
        }

        const userData = validateJWT(token); // Example: verify JWT token

        const resumeId = req.params.id;

        const query = 'SELECT * FROM data WHERE resume_id = ?';
        db.query(query, [resumeId], (err, results) => {
            if (err) {
                return res.status(200).json({
                    status: "failed",
                    msg: "Internal server error while querying database",
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    status: "failed",
                    msg: "No data found for the provided resume_id",
                });
            }

            res.status(200).json({
                status: "success",
                data: results[0],
            });
        });
    } catch (error) {

        res.status(200).json({
            status: "failed",
            msg: "An unexpected error occurred",
        });
    }
});
