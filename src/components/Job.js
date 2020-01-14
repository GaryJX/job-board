import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

export default function Job({ job, selectJob }) {
return (
    <Paper className={'job'} onClick={() => selectJob(job)}>
        <div>
            <Typography>{job.title}</Typography>
            <Typography>{job.company}</Typography>
            <Typography>{job.location}</Typography>
        </div>
        <div>
            <Typography>{job.created_at.split(' ').slice(0, 3).join(' ')}</Typography>
        </div>
    </Paper>
);
}