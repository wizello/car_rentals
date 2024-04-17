// database.ts
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './database'; // Path to your SQLite database file

const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

module.exports = db;
