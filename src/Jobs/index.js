import Button from "../Button/Button";
import Card from "../Card/";
import Loading from "../Loading/Loading";
import { GridContainer } from "./styles";

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

export default Jobs;
