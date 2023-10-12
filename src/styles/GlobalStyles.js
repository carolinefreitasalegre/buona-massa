import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;


}
  body {
    
    background-color: #F5F5F5;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  /* Barra de Rolagem */

/* Fundo que corre */
::-webkit-scrollbar-track {
  background-color: #e8e8e8;
}
/* Fundo que corre */

::-webkit-scrollbar {
  width: 6px;
  background: #f4f4f4;
}

/* Linha que desce */
::-webkit-scrollbar-thumb {
  background: rgb(10, 119, 10);
  border-radius: 15px;
}
/* Linha que desce*/

/* Barra de Rolagem */
`;

export default GlobalStyle;
