import React from "react";
import styled from "styled-components";
import defaultLogo from "./defaultLogo.svg";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { Link } from "react-router-dom";

var enStrings = {
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

const Card = (props) => {
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
  } = props.job;
  return (
    <CardContainer>
      <a href={company_url} target="_blank" rel="noreferrer">
        <CardImage src={company_logo ? company_logo : defaultLogo} />
      </a>
      <CardMeta>
        <TimeAgo date={created_at} formatter={formatter} /> &bull; {type}
      </CardMeta>
      <Link to={`/job/${id}`}>
        <CardTitle>
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </CardTitle>
      </Link>
      <CardCompany href={company_url} target="_blank" rel="noreferrer">
        {company}
      </CardCompany>
      <CardLocation>{location}</CardLocation>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: white;
  padding: 30px 25px;
  position: relative;
  border-radius: 10px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  position: absolute;
  top: -20px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #e3e6e8;
`;
const CardMeta = styled.p`
  color: #6e8098;
  margin-top: 1rem;
`;
const CardTitle = styled.h3`
  margin-top: 1rem;
`;

const CardCompany = styled.a`
  display: block;
  margin-top: 1rem;
  color: #6e8098;
  text-decoration: none;
  &:visited {
    color: #6e8098;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const CardLocation = styled.h4`
  color: #5964e0;
  margin-top: 1rem;
`;
export default Card;
