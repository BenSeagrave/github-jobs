import styled from "styled-components";
import MobileHeaderBG from "./bg-pattern-header-mobile.svg";
import DesktopHeaderBG from "./bg-pattern-header-desktop.svg";

export const StyledHeader = styled.div`
  background-image: url(${MobileHeaderBG});
  height: 160px;
  width: 100%;
  padding: 35px 25px;
  position: relative;
  margin-bottom: 80px;
  background-size: cover;
  @media (min-width: 600px) {
    background-image: url(${DesktopHeaderBG});
  }
`;

export const ThemeSwitch = styled.div`
  float: right;
  color: black;
  display: flex;
  align-items: center;
`;

export const Toggle = styled.div`
  background: white;
  content: " ";
  border-radius: 12px;
  width: 48px;
  height: 24px;
  margin: 0 13px;
  padding: 5px;
`;

export const Ball = styled.div`
  background: var(--violet);
  width: 14px;
  height: 14px;
  border-radius: 7px;
  transform: ${(props) =>
    props.active === "dark" ? " translate(24px)" : "none"};
  transition: transform 0.5s ease;
  &:hover {
    background: #939bf4;
  }
`;
