import styled from "styled-components";

import { ReactComponent as SearchIcon } from "./icon-search.svg";
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
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const FilterIcon = styled.img``;

export const StyledSearchIcon = styled(SearchIcon)`
  float: right;
  background-color: black;
`;
