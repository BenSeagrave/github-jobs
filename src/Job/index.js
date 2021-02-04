import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Job = ({ jobsList }) => {
  const { id } = useParams();
  const job = jobsList.filter((job) => job.id === id);
  console.log(job[0]);
  return (
    <SmallCardContainer>
      <SmallCardImage src={job[0].company_logo} />
      <h3>{job[0].title}</h3>
      <h4>sogitial.co</h4>
      <SmallCardButton>Company Site</SmallCardButton>
    </SmallCardContainer>
  );
};

const SmallCardContainer = styled.div`
  /* background: var9; */
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
`;

const SmallCardButton = styled.a`
  border: 1px solid black;
  background-color: grey;
  display: block;
  /* background: white; */
  border-radius: 10px;
`;

export default Job;
