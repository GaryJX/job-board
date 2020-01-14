import React from 'react';
import './assets/css/App.scss';
import JobList from './components/JobList';

const JOB_API_URL = 'http://localhost:3001/jobs';
const mockJobs = [
  {
    title: 'SWE 1',
    company: 'Google',
  },
  {
    title: 'SWE 2',
    company: 'Google2',
  },
];

async function fetchJobs(updateCallback) {
  const res = await fetch(JOB_API_URL);
  const jobsJSON = await res.json();
  console.log({jobsJSON})
  console.log(jobsJSON[0])


  updateCallback(jobsJSON);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);
  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);
  return (
    <div className="App">
      <JobList jobs={jobList}/>
    </div>
  );
}

export default App;
