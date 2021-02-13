import React from "react";
import styled from "styled-components";
import LocationIcon from "./icon-filter.svg";
import { ReactComponent as SearchIcon } from "./icon-search.svg";

const Filter = () => {
  return (
    <div className="container">
      <FilterContainer>
        <FilterInput type="text" placeholder="Filter by title..."></FilterInput>
        <FilterIcon src={LocationIcon} />
        <StyledSearchIcon />
      </FilterContainer>
    </div>
  );
};

export const FilterInput = styled.input`
  border: 0;
  outline: none;
  flex: 2;
  font-size: 16px;
`;

export const FilterContainer = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  width: 100%;
  margin-top: -160px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const FilterIcon = styled.img``;

export const StyledSearchIcon = styled(SearchIcon)`
  float: right;
  background-color: black;
`;

export const CompanyCardSmall = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const CompanyCardSmallLogo = styled.img``;
export const CompanyCardSmallMeta = styled.div``;

export default Filter;
