import styled from "styled-components";
import {colors} from "./variables";

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 20px;
    border-top: 1px solid #e1e4e8;
  }

  li:hover {
    color: ${colors.lightGrey};
    background-color: ${colors.lighterGrey};
  }
`;

export default Container;
