import { createGlobalStyle } from "styled-components"
import { rem } from "polished"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    color: #666666;
    font-size: ${rem(18)};
  }

  h1, h2, p, ul {
    margin: 0;

    a {
      color: #21653f;
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
      background-image: linear-gradient(to top,
        rgba(0,0,0,0) 11%,
        rgba(33,101,63, 0.9) 8%,
        rgba(33,101,63, 0.9) 15%,
        rgba(0,0,0,0) 16%
        );
    }
  }

  p, li {
    line-height: ${rem(24)};
  }
`;
