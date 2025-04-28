import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameScreen } from "./screens/FrameScreen";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <FrameScreen />
  </StrictMode>,
);
