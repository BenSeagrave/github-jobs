import React from "react";
import defaultLogo from "../defaultLogo.svg";
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

const Card = (props) => {
  console.log(props);
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
      <CardTitle>
        <Link to={`/job/${id}`}>
          {title && title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </Link>
      </CardTitle>
      <CardCompany href={company_url} target="_blank" rel="noreferrer">
        {company}
      </CardCompany>
      <CardLocation>{location}</CardLocation>
    </CardContainer>
  );
};

export default Card;
