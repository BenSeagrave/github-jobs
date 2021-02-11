import React from "react";
import defaultLogo from "../defaultLogo.svg";
import footerBGMobile from "./bg-pattern-detail-footer-mobile.svg";
import footerBGDesktop from "./bg-pattern-detail-footer-desktop.svg";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  CardMeta,
  CardTitle,
  CardCompany,
  CardLocation,
} from "./styles";
import styled from "styled-components";

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
        <CardContainer>
          <CardMeta>
            <TimeAgo date={created_at} formatter={formatter} /> &bull; {type}
          </CardMeta>
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
          <Button>Apply Now</Button>
          <CardDescription
            dangerouslySetInnerHTML={createDangerousHTML(description)}
          />
        </CardContainer>
        <Footer>
          <h3>How to Apply</h3>
          <p dangerouslySetInnerHTML={createDangerousHTML(how_to_apply)}></p>
        </Footer>
        <Button>Apply Now</Button>
      </>
    );
  } else {
    return (
      <CardContainer>
        <a href={company_url} target="_blank" rel="noreferrer">
          <CardImage src={company_logo ? company_logo : defaultLogo} />
        </a>
        <CardMeta>
          <TimeAgo date={created_at} formatter={formatter} /> &bull; {type}
        </CardMeta>
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

const Button = styled.button`
  background: var(--violet);
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 20px 10px 10px;
  color: var(--white);
  margin-bottom: 2rem;
  font-size: 16px;
`;
export default Card;

const CardDescription = styled.div`
  word-wrap: break-word;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--black);
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
`;

const Footer = styled.div`
  background: url(${footerBGMobile});
  background-size: cover;
  padding: 30px 25px;
  position: relative;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
