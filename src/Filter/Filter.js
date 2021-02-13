import React from "react";
import LocationIcon from "./icon-filter.svg";

import {
  FilterContainer,
  FilterIcon,
  FilterInput,
  StyledSearchIcon,
} from "./styles";

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

export default Filter;
