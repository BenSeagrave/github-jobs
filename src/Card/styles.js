import styled from "styled-components";
import footerBGMobile from "./bg-pattern-detail-footer-mobile.svg";
import footerBGDesktop from "./bg-pattern-detail-footer-desktop.svg";

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

export const CardDescription = styled.div`
  margin-top: 2rem;
  word-wrap: break-word;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.headerColor};
  }
  p {
    margin-bottom: 1.8rem;
    line-height: 1.8;
    color: var(--dark-grey);
  }
  li::marker {
    color: var(--violet);
  }
  ul li {
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    padding-left: 20px;
    color: var(--dark-grey);
  }
  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

export const Footer = styled.div``;

export const HowToApply = styled.div`
  background: url(${footerBGMobile});
  background-size: cover;
  padding: 30px 25px;
  position: relative;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: white;
  word-wrap: break-word;
  a,
  a:visited {
    color: white;
  }
  @media (min-width: 600px) {
    background: url(${footerBGDesktop});
    background-size: cover;
  }
`;

export const ApplyNowBG = styled.div`
  background: ${(props) => props.theme.cardBackgroundColor};
  margin: 0 -25px -25px;
  padding: 0px 25px;
  position: relative;
  @media (min-width: 600px) {
    padding: 0px 40px;
  }
`;

export const ApplyNow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 20px 0;
`;
export const ApplyDetails = styled.div`
  display: none;
  h3 {
    color: ${(props) => props.theme.headerColor};
  }
  h4 {
    color: var(--dark-grey);
  }
  @media (min-width: 600px) {
    display: inline;
  }
`;
