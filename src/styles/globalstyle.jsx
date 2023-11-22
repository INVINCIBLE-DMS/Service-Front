import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family:"Gwangyang-Sunshine";
    user-select: none;
  }

  body {
    ::-webkit-scrollbar {
      width: 10px;
      position:absolute;
    }
    ::-webkit-scrollbar-thumb {
      width: 10px;
      background-color: ${({ theme }) => theme.color.whitePink};
      border-radius:5px;
    }
    ::-webkit-scrollbar-track {
      width: 10px;
      background-color: white;
    }
  }
`;
