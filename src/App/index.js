import React, { useState, useEffect } from "react";
import Header from "../Header/";
import Card from "../Card/";
import styled from "styled-components";

function App() {
  const [jobsList, setJobsList] = useState([]);

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
  return (
    <div className="App">
      <Header></Header>
      <BodyContainer>
        <GridContainer className="container">
          {jobsList.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </GridContainer>
        <LoadMore>Load More</LoadMore>
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
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LoadMore = styled.button`
  background-color: #5964e0;
  padding: 30px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

export default App;
