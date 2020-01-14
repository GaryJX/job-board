const {promisify} = require('util');
const fetch = require('node-fetch');
const redis = require('redis');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
    let pageNum = 0;
    let res, jobs;
    const allGithubJobs = [];
    console.log('Started Fetch Github');
    do {
        res = await fetch(`${baseURL}?page=${pageNum}`);
        jobs = await res.json();
        console.log('Received some jobs')
        console.log(jobs.length)
        allGithubJobs.push(...jobs);
        pageNum++;
    } while (jobs.length > 0); 

    const success = await setAsync('github', JSON.stringify(allGithubJobs));
    console.log({ success})

    console.log(allGithubJobs.length);
    console.log(allGithubJobs)
    return allGithubJobs;
}
// For Testing purposes only
async function printRedisGithub() {
    console.log('Started Retrieving Github from Redis')
    let res = await getAsync('github');
    res = JSON.parse(res);
    console.log(res.length);
    console.log(res[0])
}

printRedisGithub()

module.exports = fetchGithub;
// fetchGithub();