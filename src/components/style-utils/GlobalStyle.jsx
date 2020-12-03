import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import { MAX_WIDTH } from "./variables";

const GlobalStyle = createGlobalStyle`
   ${reset}

   * {
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   body {
      height: 100%;
      margin: 0;
      background-repeat: no-repeat;
      background-attachment: fixed;
      /* background-image: linear-gradient(to bottom right, #b7b6c1, #94958b); */
   }

   h1, h2, h3, h4, h5 {
      font-weight: bold;
      
   }

   h1 {
      font-size: 3.2rem;
   }

   h2 {
      font-size: 2.6rem;
   }

   h3 {
      font-size: 2.0rem;
   }

   h4 {
      font-size: 1.6rem;
   }

   h5 {
      font-size: 1.4rem;
   }

   p {
      font-size: 1.2rem;
   }

   .content {
      margin: 0 auto;
      max-width: ${MAX_WIDTH};
      background-color: magenta;
   }
`;

export default GlobalStyle;
