import styled from "styled-components";

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
          <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
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

export default Jobs;
