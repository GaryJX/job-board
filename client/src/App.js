import React from 'react';
import './assets/css/App.scss';
import JobList from './components/JobList';

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

function App() {
  return (
    <div className="App">
      <JobList jobs={mockJobs} />
    </div>
  );
}

export default App;
