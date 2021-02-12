import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card";
import defaultLogo from "../defaultLogo.svg";
import Loading from "../Loading/Loading";

const Job = ({ jobsList, isLoading }) => {
  const { id } = useParams();
  if (isLoading) {
    return <Loading />;
  }
  const { company_logo, company_url, company } = jobsList.find(
    (job) => job.id === id
  );

  return (
    <>
      <SmallCardContainer className="container">
        <SmallCardImage src={company_logo ? company_logo : defaultLogo} />
        <span>
          <SmallCardCompany>{company}</SmallCardCompany>
          <SmallCardCompanyUrl>{company_url}</SmallCardCompanyUrl>
        </span>
        <SmallCardButton>Company Site</SmallCardButton>
      </SmallCardContainer>

      <Card job={jobsList.find((job) => job.id === id)} large={true} />
    </>
  );
};

const SmallCardContainer = styled.div`
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 50px 20px;
  border-radius: 5px;
  width: 100%;
  margin-top: -125px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-align: center;
  @media (min-width: 600px) {
    height: 140px;
    text-align: left;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 180px;
    padding-right: 35px;
  }
`;

const SmallCardImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  position: absolute;
  top: -25px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #e3e6e8;
  @media (min-width: 600px) {
    width: 140px;
    height: 140px;
    left: 0;
    top: 0;
    border-radius: 5px;
  }
`;

const SmallCardCompany = styled.h3`
  margin-bottom: 10px;
  color: ${(props) => props.theme.headerColor};
`;
const SmallCardCompanyUrl = styled.h4`
  margin-bottom: 20px;
  color: var(--dark-grey);
`;
const SmallCardButton = styled.a`
  background-color: rgba(89, 100, 224, 0.1);
  color: var(--violet);
  padding: 20px 30px 10px;
  display: block;
  border-radius: 10px;
  flex-shrink: 0;
`;

export default Job;
