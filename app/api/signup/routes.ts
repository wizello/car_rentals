import { NextApiRequest, NextApiResponse } from 'next';
import db from './database'; // Import the db object from your database module
import { NextResponse } from 'next/server';

export function POST(req: NextApiRequest) {
    const { name, email, password } = req.body;
    db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], function (err) {
        if (err) {
            NextResponse.json({ error: err.message }, { status: 500 });
            return;
        }
        return NextResponse.json({ id: this.lastID }, { status: 201 });
    });
}

export function GET(req: NextApiRequest) {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            NextResponse.json({ error: err.message }, { status: 500 });
            return;
        }
        NextResponse.json(rows, { status: 200 });
    });
}

