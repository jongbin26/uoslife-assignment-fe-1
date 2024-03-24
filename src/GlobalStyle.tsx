import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background-color: #fafafa;
    font-family: Pretendard;
    font-weight: 500;
  }
`;

export default GlobalStyle;
