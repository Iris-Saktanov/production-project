import Counter from "./components/Counter";
import { someFn } from "./test";
import { createRoot } from "react-dom/client";

someFn();

const domContainer = document.getElementById("root");
if (!domContainer) {
  throw new Error("Нет удалось найти root тег");
}
const root = createRoot(domContainer);
root.render(
  <>
    <h1>Hello from index.ts file!!!</h1>
    <Counter />
  </>,
);
