import styled from "styled-components";

export const CardContainer = styled.div`
  background: var(--white);
  padding: 30px 25px;
  position: relative;
  border-radius: 10px;
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
export const CardMeta = styled.p`
  color: var(--dark-grey);
  margin-top: 1rem;
`;
export const CardTitle = styled.h3`
  margin-top: 1rem;
  a,
  a:visited {
    color: var(--midnight);
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
  margin-top: 1rem;
`;
