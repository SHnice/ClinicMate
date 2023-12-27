import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./AuthContext";
import Loader from "./components/Loader/Loader";
import Snack from "./components/Snack/Snack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Loader />
      <Snack />
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
