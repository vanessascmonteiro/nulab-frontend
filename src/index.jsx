import ReactDOM from "react-dom/client";

import App from "./components/App";

import "./assets/styles/normalize.css";
import "./assets/styles/colors.css";
import "./assets/styles/defaults.css";

const root = ReactDOM.createRoot(document.getElementById("raiz"));
root.render(<App />);
