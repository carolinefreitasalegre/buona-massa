import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyles.js";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes/Routers.jsx";
import { ApiProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <Routers />
        <GlobalStyle />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
