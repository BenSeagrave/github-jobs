import React, { useState, useEffect } from "react";
import Header from "../Header/";
import Card from "../Card/";
import styled from "styled-components";

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

  const handleLoadMore = () => {
    setJobsShown(jobsList.slice(0, jobsShown.length + 6));
  };
  return (
    <div className="App">
      <Header></Header>
      <BodyContainer>
        <GridContainer className="container">
          {jobsShown.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </GridContainer>
        <div className="container center">
          {jobsList.length > 12 && jobsList.length !== jobsShown.length ? (
            <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
          ) : (
            ""
          )}
        </div>
      </BodyContainer>
    </div>
  );
}

const BodyContainer = styled.div`
  padding: 25px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  justify-content: center;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    /* margin: 0 auto 50px 0; */
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LoadMore = styled.button`
  background-color: #5964e0;
  padding: 20px 35px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  &:hover {
    background-color: #939bf4;
    cursor: pointer;
  }
`;

export default App;
