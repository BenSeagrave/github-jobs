import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import Card from "../Card";
import defaultLogo from "../defaultLogo.svg";
import Loading from "../Loading/Loading";
import {
  SmallCardCompany,
  SmallCardCompanyUrl,
  SmallCardContainer,
  SmallCardImage,
} from "./styles";

const Job = ({ jobsList, isLoading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  if (isLoading) {
    return <Loading />;
  }
  const { company_logo, company_url, company } = jobsList.find(
    (job) => job.id === id
  );

  return (
    <>
      <SmallCardContainer className="largeCardContainer">
        <SmallCardImage src={company_logo ? company_logo : defaultLogo} />
        <span>
          <SmallCardCompany>{company}</SmallCardCompany>
          <SmallCardCompanyUrl>{company_url}</SmallCardCompanyUrl>
        </span>
        {company_url && (
          <Button light={true} target={company_url}>
            Company Site
          </Button>
        )}
      </SmallCardContainer>

      <Card job={jobsList.find((job) => job.id === id)} large={true} />
    </>
  );
};

export default Job;
