import { createRoot } from "react-dom/client";
import App from "./components/App";
import Reloj  from "./components/Reloj";
import "./index.css";

const root = document.getElementById("root");

createRoot(root).render(
  <>
    <div>
      <Reloj />
    </div>
    <div>
      <h1 className="titleNeon">LISTA DE TAREAS</h1>
      <App />
    </div>
  </>
);
