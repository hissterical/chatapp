import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Theme from "./Theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={Theme}>
        <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
