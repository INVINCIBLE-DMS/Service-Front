import { createGlobalStyle } from "styled-components";
import fontR from "../asset/font/GwangyangSunshineRegular.ttf";
import fontB from "../asset/font/GwangyangSunshineBold.ttf";

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "Gwangyang-Sunshine";
    src: local("GwangyangSunshineRegular"),
    url(${fontR}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Gwangyang-Sunshine";
    src: local("GwangyangSunshineBold"),
    url(${fontB}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
