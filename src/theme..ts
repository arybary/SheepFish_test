import { createGlobalStyle } from "styled-components";

const colors = {
  blue: "#2196f3",
  yellow: "#ffff00",
  yellowOpacity: "rgba(255, 255, 128, .5)",
  blueOpacity: "rgba(0, 101, 260, .4)",
};
export const { blue, yellow, yellowOpacity, blueOpacity } = colors;

const breackpoints = {
  mobile: "600px",
};

export const { mobile } = breackpoints;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
