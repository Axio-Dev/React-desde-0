import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { MemoHook } from "./06-memos/MemoHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { PokemonPage } from "./03-examples/PokemonPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter></MemoCounter> */}
    <InstagromApp />
  </StrictMode>,
);
