import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Job = ({ jobsList }) => {
  const { id } = useParams();
  const job = jobsList.filter((job) => job.id === id);
  return (
    <SmallCardContainer>
      <SmallCardImage />
      <h3>So Digital Inc.</h3>
      <h4>sogitial.co</h4>
      <SmallCardButton />
    </SmallCardContainer>
  );
};

const SmallCardContainer = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  width: 100%;
  margin-top: -125px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const SmallCardImage = styled.div`
  background: white;
  border-radius: 10px;
`;

const SmallCardButton = styled.div`
  background: white;
  border-radius: 10px;
`;

export default Job;
