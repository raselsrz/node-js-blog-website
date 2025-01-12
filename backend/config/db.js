const mysql = require('mysql2/promise');

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('MySQL Connected...');
        global.db = connection; // Making it globally available
    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
