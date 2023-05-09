import createPool from '@databases/pg'
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('./secrets.json'));

export const pool = createPool(data.DATABASE_URL)
