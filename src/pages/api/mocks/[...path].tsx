import fs from 'fs';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function mockHandler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.url) return res.status(404).json({ error: 'url no found' });
    const filepath = req.url.replace(/^\/api\/mocks/, '');
    try {
        const mock = fs.readFileSync(`src/lib/api${filepath}`);
        return res.status(200).send(mock);
    } catch {
        return res.status(404).json({ error: 'file no found' });
    }
}
