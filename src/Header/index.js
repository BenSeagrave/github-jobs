import React from "react";
import { StyledHeader, ThemeSwitch, Toggle, Ball } from "./styles";

import Logo from "./logo.svg";
import Sun from "./icon-sun.svg";
import Moon from "./icon-moon.svg";

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
        <img src={Logo} alt="logo" />
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
