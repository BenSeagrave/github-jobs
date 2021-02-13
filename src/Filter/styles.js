import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./icon-search.svg";

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
