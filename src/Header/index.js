import React from "react";
import {
  StyledHeader,
  ThemeSwitch,
  FilterContainer,
  FilterInput,
  FilterIcon,
  StyledSearchIcon,
} from "./styles";
import Logo from "./logo.svg";
import LocationIcon from "./icon-filter.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="logo" />
      <ThemeSwitch>ThemeSwitch</ThemeSwitch>
      <FilterContainer>
        <FilterInput type="text" placeholder="Filter by title..."></FilterInput>
        <FilterIcon src={LocationIcon} />
        <StyledSearchIcon />
      </FilterContainer>
    </StyledHeader>
  );
};

export default Header;
