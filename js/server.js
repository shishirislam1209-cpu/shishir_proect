const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // এটি ফ্রন্টএন্ডকে ডাটা পাঠানোর অনুমতি দিবে
app.use(bodyParser.json());

// ডাটাবেজ কানেকশন
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // XAMPP ডিফল্ট পাসওয়ার্ড ফাঁকা থাকে
    database: 'user_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to Database.');
});

// সাইন আপ এন্ডপয়েন্ট
app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body;
    
    const query = "INSERT INTO users1 (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'ডাটাবেজে সমস্যা হয়েছে' });
        }
        res.status(200).json({ message: 'আপনার তথ্য সফলভাবে জমা হয়েছে!' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});