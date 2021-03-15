import React from "react";
import defaultLogo from "../defaultLogo.svg";

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
  CardDescription,
  Footer,
  HowToApply,
  ApplyNowBG,
  ApplyNow,
  ApplyDetails,
} from "./styles";

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

const Card = ({ job, large, rootDir }) => {
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
          <Link to={`${rootDir}/job/${id}`}>
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
