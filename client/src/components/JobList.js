import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({ jobs }) {
    return ( 
        <>
            <Typography variant="h1">
                Entry Level Software Development Jobs
            </Typography>
            <div className={"job-list"}>
                {
                    jobs.map(job => <Job job={job} />)
                }
            </div>
        </>
    );
}