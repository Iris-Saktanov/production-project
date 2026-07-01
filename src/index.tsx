import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const domContainer = document.getElementById("root");
if (!domContainer) {
  throw new Error("Нет удалось найти root тег");
}
const root = createRoot(domContainer);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
