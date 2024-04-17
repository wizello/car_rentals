//@ts-ignore
import { NextApiRequest, NextApiResponse } from 'next';
import db from './database'; // Import the db object from your database module

export function POST(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password } = req.body;
    db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: this.lastID });
    });
}

export function GET(req: NextApiRequest, res: NextApiResponse) {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(rows);
    });
}
