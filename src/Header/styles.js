import styled from "styled-components";
import HeaderBG from "./bg-pattern-header.svg";

export const StyledHeader = styled.div`
  background-image: url(${HeaderBG});
  height: 135px;
  width: 100%;
  padding: 35px 25px;
  position: relative;
  margin-bottom: 80px;
`;

export const ThemeSwitch = styled.div`
  float: right;
  color: black;
`;
