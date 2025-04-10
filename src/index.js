import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Counter from "./Counter2";
import Board from "./Board2";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <Counter /> */}
    <Board />
  </StrictMode>
);
