import express from 'express'
import { pool } from './database.js'
import {sql} from '@databases/pg'
const app = express()
const port = 4000


app.get('/topics', async (req, res) => { 
    const topics = await pool.query(sql`SELECT * FROM moodquote.topics`);
    let arr = []
    for (let i = 0; i < topics.length; i++) {
        arr.push(topics[i].topic_name)
    }
    let topicsJson = {"topics": arr}
    res.json(topicsJson);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





 
