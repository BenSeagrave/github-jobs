import React from "react";
import { StyledHeader, ThemeSwitch, Toggle, Ball } from "./styles";

import Logo from "./logo.svg";
import Sun from "./icon-sun.svg";
import Moon from "./icon-moon.svg";
import { Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const handleBallClick = (e) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <StyledHeader>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ThemeSwitch>
          <img src={Sun} alt="Sun" />
          <Toggle>
            <Ball active={theme} onClick={handleBallClick} />
          </Toggle>
          <img src={Moon} alt="Moon" />
        </ThemeSwitch>
      </div>
    </StyledHeader>
  );
};

export default Header;
