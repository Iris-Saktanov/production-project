import Counter from "./components/Counter";
import { someFn } from "./test";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

someFn();

const domContainer = document.getElementById("root");
if (!domContainer) {
  throw new Error("Нет удалось найти root тег");
}
const root = createRoot(domContainer);
root.render(
  <BrowserRouter>
    <App />
    <Counter />
  </BrowserRouter>,
);
