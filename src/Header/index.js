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

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={Logo} alt="logo" />
        <ThemeSwitch>ThemeSwitch</ThemeSwitch>
      </div>
    </StyledHeader>
  );
};

export default Header;
