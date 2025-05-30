import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
<RecoilRoot>
  <ToastContainer />
    <App />
 </RecoilRoot>
);

