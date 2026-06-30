import Counter from "./components/Counter";
import { someFn } from "./test";
import { createRoot } from "react-dom/client";
import "./index.scss";

someFn();

const domContainer = document.getElementById("root");
if (!domContainer) {
  throw new Error("Нет удалось найти root тег");
}
const root = createRoot(domContainer);
root.render(
  <>
    <h1 className="app">Hello from index.ts file!!!</h1>
    <Counter />
  </>,
);
