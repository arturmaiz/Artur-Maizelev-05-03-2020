import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0%;
    padding: 0%;
  }

  body {
    font-family: 'Muli', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  `;
