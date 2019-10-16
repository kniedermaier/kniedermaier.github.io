import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    color: #666666;
    font-size: 1.25rem;
  }

  h1, h2, p, ul {
    margin: 0;
  }

  p {
    line-height: 1.75rem;
  }

  a {
    color: #21653f;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
