import { useEffect, useState } from "react";
import "./60-effect.css";

export default function Sample(): JSX.Element {
  const [time1, setTime1] = useState("N/A");
  const [time2, setTime2] = useState("N/A");
  const [time3, setTime3] = useState("N/A");
  const [klaz, setKlaz] = useState("red");
  const [slider1Val, setSlider1Val] = useState(5);
  const [slider2Val, setSlider2Val] = useState(50);

  useEffect(() => {
    // Called only on FIRST render
    setTime1(new Date().toISOString());
  }, []);
  useEffect(() => {
    // Called only on EVERY render
    setTime2(new Date().toISOString());
    return () => {
      // console.debug("Undo every effect");
    };
  });
  useEffect(() => {
    // Called only when Slider 1 is updated
    const now = new Date().toISOString();
    setTime3(now);
    return () => {
      console.debug(`Slider was last updated ${now}`);
    };
  }, [slider1Val]);

  // const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <h1 className={klaz}>
        <code>useEffect</code> Demo
      </h1>
      <input
        type="range"
        min={3}
        max={10}
        value={slider1Val}
        onChange={(ev) => {
          setSlider1Val(Number(ev.target.value));
        }}
      ></input>
      <input
        type="range"
        min={20}
        max={80}
        value={slider2Val}
        onChange={(ev) => {
          setSlider2Val(Number(ev.target.value));
        }}
      ></input>
      <ul>
        <li>Left slider {slider1Val}</li>
        <li>Right slider {slider2Val}</li>
        <li>After First Render at {time1}</li>
        <li>After every render at {time2}</li>
        <li>After left slider update at {time3}</li>
      </ul>
    </>
  );
}
