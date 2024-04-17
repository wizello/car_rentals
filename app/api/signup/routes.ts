import { NextApiRequest, NextApiResponse } from 'next';
import { Database } from 'sqlite3';
import { NextResponse } from 'next/server';


export function POST(req: NextApiRequest) {
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
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            NextResponse.json({ error: err.message }, { status: 500 });
            return;
        }
        NextResponse.json(rows, { status: 200 });
    });
    NextResponse.json({},{ status: 400 });
}