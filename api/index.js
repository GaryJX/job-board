const express = require('express')
const app = express()
const port = 3001

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const getAsync = promisify(client.get).bind(client);
// const setAsync = promisify(client.set).bind(client);

app.get('/jobs', async (req, res) => {
    console.log('Hit Jobs Endpoint')
    const jobs = await getAsync('github');
    console.log('Received Jobs!')
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    return res.send(jobs);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))