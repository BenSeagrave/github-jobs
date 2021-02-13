import React from "react";
import defaultLogo from "../defaultLogo.svg";
import footerBGMobile from "./bg-pattern-detail-footer-mobile.svg";
import footerBGDesktop from "./bg-pattern-detail-footer-desktop.svg";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { Link } from "react-router-dom";
import {
  CardContainer,
  SubContainer,
  TimeText,
  CardImage,
  CardTitle,
  CardCompany,
  CardLocation,
} from "./styles";
import styled from "styled-components";
import Button from "../Button/Button";

const enStrings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: "ago",
  suffixFromNow: "from now",
  seconds: "less than a minute",
  minute: "1m",
  minutes: "%dm",
  hour: "1h",
  hours: "%dh",
  day: "a day",
  days: "%dd",
  month: "1mo",
  months: "%dmo",
  year: "1y",
  years: "%dy",
  wordSeparator: " ",
};

const formatter = buildFormatter(enStrings);

const Card = ({ job, large }) => {
  const {
    company,
    company_logo,
    company_url,
    created_at,
    description,
    how_to_apply,
    id,
    location,
    title,
    type,
    url,
  } = job;

  const createDangerousHTML = (input) => {
    return { __html: input };
  };

  if (large) {
    return (
      <>
        <div className="largeCardContainer">
          <CardContainer>
            <SubContainer>
              <span>
                <TimeText>
                  <TimeAgo date={created_at} formatter={formatter} /> &bull;{" "}
                  {type}
                </TimeText>
                <CardTitle>{title}</CardTitle>
                <CardLocation>{location}</CardLocation>
              </span>
              <Button target={url}>Apply Now</Button>
            </SubContainer>
            <CardDescription
              dangerouslySetInnerHTML={createDangerousHTML(description)}
            />
          </CardContainer>
        </div>
        <Footer>
          <div className="largeCardContainer">
            <HowToApply>
              <h3>How to Apply</h3>
              <p
                dangerouslySetInnerHTML={createDangerousHTML(how_to_apply)}
              ></p>
            </HowToApply>
          </div>
          <ApplyNowBG>
            <div className="largeCardContainer">
              <ApplyNow>
                <ApplyDetails>
                  <h3>{title}</h3>
                  <h4>{company}</h4>
                </ApplyDetails>
                <Button target={url}>Apply Now</Button>
              </ApplyNow>
            </div>
          </ApplyNowBG>
        </Footer>
      </>
    );
  } else {
    return (
      <CardContainer>
        <a href={company_url} target="_blank" rel="noreferrer">
          <CardImage src={company_logo ? company_logo : defaultLogo} />
        </a>
        <TimeText>
          <TimeAgo date={created_at} formatter={formatter} /> &bull; {type}
        </TimeText>
        <CardTitle>
          <Link to={`/job/${id}`}>
            {title && title.length > 40
              ? `${title.substring(0, 40)}...`
              : title}
          </Link>
        </CardTitle>
        <CardCompany href={company_url} target="_blank" rel="noreferrer">
          {company}
        </CardCompany>
        <CardLocation>{location}</CardLocation>
      </CardContainer>
    );
  }
};

export default Card;

const CardDescription = styled.div`
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

const Footer = styled.div``;

const HowToApply = styled.div`
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

const ApplyNowBG = styled.div`
  background: ${(props) => props.theme.cardBackgroundColor};
  margin: 0 -25px -25px;
  padding: 0px 25px;
  position: relative;
  @media (min-width: 600px) {
    padding: 0px 40px;
  }
`;

const ApplyNow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 20px 0;
`;
const ApplyDetails = styled.div`
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
