
const express = require('express');
const { validateJWT, generateJWT } = require('./jwt_token');
const {resume_id} =require('./crypto')
const db = require('./db');
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Node.js');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
        console.log(resumeID);
        
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
        console.log(err);
        
        res.json({
            status: "failed",
            msg: "Invalid or expired token"
        })
    }   
})

app.post('/api/login', (req, res) => {

    try {

        let { mail_id, password } = req.body
        if (mail_id == "" || password == "") {
            throw new Error("Mail Id not found");
        }

        let query = `SELECT * FROM user_details WHERE mail_id=?`;
        db.query(query, [mail_id], (err, result) => {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    msg: "unknown error occured"
                })
                return;
            }

            if (result.length == 0) {
                res.json({
                    status: "Login Failed",
                    msg: "Mail id or password is in correct"
                })
                return;
            }
            if (password == result[0].user_token) {
                const jwt_token = generateJWT(result[0].user_id);
                res.json({
                    status: "success",
                    auth_token: jwt_token
                })
                return;
            }

            else {
                res.json({
                    status: "Login Failed",
                    msg: "Mail id or password is in correct"
                })
                return;
            }
        })
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
        const query = 'SELECT * FROM data WHERE user_id=?';
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