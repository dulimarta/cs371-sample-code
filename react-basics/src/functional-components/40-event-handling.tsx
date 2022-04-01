import React, { createRef, MouseEvent } from "react";
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
      <h2>Functional Event Handling</h2>
      <button onClick={doOne}>Click Me</button>
      <button onClick={doTwo}>Click Me</button>
      <div
        ref={box}
        className="clearBox"
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}></div>
    </>
  );
}
