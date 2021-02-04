import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "../Header/";
import Jobs from "../Jobs/";
import Job from "../Job/";
import styled from "styled-components";
import Filter from "../Filter/Filter";

function App() {
  const [jobsList, setJobsList] = useState([]);
  const [jobsShown, setJobsShown] = useState([]);

  // On first load, load data into jobsList state with no search parameters
  useEffect(() => {
    const fetchData = async () => {
      // Need to add CORS proxy if not using chrome extension!
      const response = await fetch("https://jobs.github.com/positions.json");
      const data = await response.json();
      return data;
    };
    fetchData().then((jobs) => setJobsList(jobs));
  }, []);

  useEffect(() => {
    setJobsShown(jobsList.slice(0, 12));
  }, [jobsList]);

  return (
    <div className="App">
      <Header jobsList={jobsList}></Header>
      <BodyContainer>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Filter />
                <Jobs
                  jobsList={jobsList}
                  jobsShown={jobsShown}
                  setJobsList={setJobsList}
                  setJobsShown={setJobsShown}
                />
              </>
            )}
          />
          <Route path="/job/:id" render={() => <Job jobsList={jobsList} />} />
        </Switch>
      </BodyContainer>
    </div>
  );
}

const BodyContainer = styled.div`
  padding: 25px;
`;

export default App;
