import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
    min-height: 120vh; /* Define a altura total da página */
    background: linear-gradient(${(props) => props.theme["gray-900"]}, ${(
      props,
    ) => props.theme["gray-900"]}) top,
    ${(props) => props.theme["gray-800"]};
    background-size: 100% 210px, 100%;
    background-repeat: no-repeat;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`
