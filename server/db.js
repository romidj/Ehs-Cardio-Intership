import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19141918",
    database: "ehscardio"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.");
});

export default db;