import { createRef, MouseEvent } from "react";
import "./40-event-handling.css";

export default function Sample(): JSX.Element {
  const city = "Chicago";
  const box = createRef<HTMLDivElement>();
  function doOne(e: MouseEvent<HTMLButtonElement>) {
    console.log("Button is click", e.target, city);
    alert("I don't live in " + city);
  }
  const doTwo = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button is click", e.target, city);
    alert("I don't live in " + city);
  };
  const mouseIn = (e: MouseEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).className = "coloredBox";
  };
  function mouseOut(e: MouseEvent<HTMLDivElement>) {
    (e.target as HTMLDivElement).className = "clearBox";
  }
  return (
    <>
      <h2>Event Handling in Functional Components</h2>
      <button onClick={doOne}>Click Left</button>
      <button onClick={doTwo}>Click Right</button>
      <div
        ref={box}
        className="clearBox"
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      ></div>
    </>
  );
}
