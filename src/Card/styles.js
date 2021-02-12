import styled from "styled-components";
import TimeAgo from "react-timeago";

export const CardContainer = styled.div`
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 30px 25px;
  position: relative;
  border-radius: 10px;
  @media (min-width: 600px) {
    padding: 30px 40px;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  position: absolute;
  top: -20px;
  border-radius: 15px;
  background-color: var(--white);
  border: 1px solid var(--grey);
`;

export const TimeText = styled.p`
  color: var(--dark-grey);
  margin-top: 1rem;
`;
export const CardTitle = styled.h3`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.headerColor};
  a,
  a:visited {
    color: ${(props) => props.theme.headerColor};
    text-decoration: none;
  }
  a:hover {
    color: var(--dark-grey);
  }
`;

export const CardCompany = styled.a`
  display: block;
  margin-top: 0.8rem;
  color: var(--dark-grey);
  text-decoration: none;
  &:visited {
    color: var(--dark-grey);
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const CardLocation = styled.h4`
  color: var(--violet);
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;
