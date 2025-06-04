import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
