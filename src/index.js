import React from "react";
//import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
