const fetch = require('node-fetch');
const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
    let pageNum = 0;
    let res, jobs;
    const allGithubJobs = [];
    do {
        res = await fetch(`${baseURL}?page=${pageNum}`);
        jobs = await res.json();
        allGithubJobs.push(...jobs);
        pageNum++;
    } while (jobs.length > 0); 

    console.log(allGithubJobs.length);
    console.log(allGithubJobs)
    return allGithubJobs;
}

module.exports = fetchGithub;
// fetchGithub();