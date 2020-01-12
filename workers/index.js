const CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

// Fetch Github Jobs
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');