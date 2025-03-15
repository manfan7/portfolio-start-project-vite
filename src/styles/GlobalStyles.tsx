import {createGlobalStyle} from "styled-components";
import {theme} from "./theme.tsx";
import {style} from "../layout/sections/main/Main_styles.tsx";

export const GlobalStyles = createGlobalStyle`
   *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }


   ul {
      list-style: none;
   }

   a {
      text-decoration: none;
      cursor: pointer;
   }

   button {
      background-color: unset;
      border: none;

      color: ${theme.colors.textColor};
   }

   body {
      color: ${theme.colors.textColor};
      line-height: 1.4;
      font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-width: 360px;
      scroll-behavior: smooth;
     
   }

   
   section {
      padding: 100px 0;
   }

   section:nth-of-type(even) {
      background-color: ${theme.colors.primaryBg};

   }

   section:nth-of-type(odd) {
      background-color: ${theme.colors.secondaryBg};
   }

   ${style.MainStyled} {
      background-color: ${theme.colors.primaryBg} !important;
   }

   @media ${theme.media.tablet} {
      section {
         padding: 80px 0;
      }

   }


`