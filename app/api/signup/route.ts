// app/api/signup/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../database';
import { NextResponse } from 'next/server';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         handlePost(req, res);
//     }
//     else if (req.method === 'GET') {
//         handleGet(req, res)
//     } else {
//         res.status(405).end(); // Method Not Allowed
//     }
// }

export function POST(req: NextApiRequest) {
    // Insert new user into the database
    const { name, email, password } = req.body;
    db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], function (err) {
        if (err) {
            NextResponse.json({ error: err.message }, { status: 500 });
            return;
        }
        return NextResponse.json({ id: this.lastID }, { status: 201 });
    }
    );
    NextResponse.json({},{ status: 400 });

}

export function GET(req: NextApiRequest) {
    // Insert new user into the database
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            NextResponse.json({ error: err.message }, { status: 500 });
            return;
        }
        NextResponse.json(rows, { status: 200 });
    });
    NextResponse.json({},{ status: 400 });
}