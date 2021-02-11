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
