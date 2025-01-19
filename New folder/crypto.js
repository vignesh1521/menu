const crypto = require('crypto');
const db = require('./db'); // Assuming `db` is your database connection module

async function resume_id() {
    return new Promise((resolve, reject) => {
        function generateUniqueId() {
            const token = crypto.randomBytes(8).toString('hex'); // Generate the token

            // Check if the token already exists in the database
            const query = 'SELECT COUNT(*) AS count FROM data WHERE resume_id = ?';
            db.query(query, [token], (err, result) => {
                if (err) {
                    reject(err); // Handle database errors
                    return;
                }

                if (result[0].count > 0) {
                    // Token already exists; generate a new one
                    
                    generateUniqueId();
                } else {
                    // Token is unique; resolve it
                    resolve(token);
                }
            });
        }

        generateUniqueId();
    });
}

module.exports = { resume_id };
