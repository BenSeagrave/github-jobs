import styled from "styled-components";
import Button from "../Button/Button";

import Card from "../Card/";
import Loading from "../Loading/Loading";

const Jobs = ({
  jobsList,
  jobsShown,
  setJobsList,
  setJobsShown,
  isLoading,
}) => {
  const handleLoadMore = () => {
    setJobsShown(jobsList.slice(0, jobsShown.length + 6));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <GridContainer className="container">
        {jobsShown.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </GridContainer>
      <div className="container center">
        {jobsList.length > 12 && jobsList.length !== jobsShown.length ? (
          <Button onClick={handleLoadMore}>Load More</Button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  justify-content: center;
  margin-bottom: 50px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Jobs;
