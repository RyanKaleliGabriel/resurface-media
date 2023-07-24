import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("videoModal").style.display = "block";
});

document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("videoModal").style.display = "none";
});
reportWebVitals();
