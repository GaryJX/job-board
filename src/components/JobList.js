import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal';
import Button from '@material-ui/core/Button'

export default class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            selectedJob: {},
        }
    }

    handleSelectJob = (job) => {
        this.setState({ selectedJob: job, modalOpen: true });
    }

    render() {
        return ( 
            <>
                <Typography variant="h4" component="h1">
                    Entry Level Software Development Jobs
                </Typography>
                <Typography variant="h6">
                    Found {this.props.jobs.length} jobs
                </Typography>
                <div className={"job-list"}>
                    {
                        this.props.jobs.map(job => <Job job={job} selectJob={this.handleSelectJob} />)
                    }
                </div>

                <JobModal open={this.state.modalOpen} handleClose={() => this.setState({ modalOpen: false })} selectedJob={this.state.selectedJob} />
            </>
        );
    }

}