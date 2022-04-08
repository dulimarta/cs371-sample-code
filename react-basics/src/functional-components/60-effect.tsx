import { useEffect, useState } from "react";
import "./60-effect.css";

export default function Sample(): JSX.Element {
  const [firstRender, setFirstRenderTime] = useState("N/A");
  const [renderTime, setTime2] = useState("N/A");
  const [leftSliderUpdateTime, setLeftSliderTime] = useState("N/A");
  const [lastLeftSliderTime, setLastLSTime] = useState("N/A");
  const [klaz, setKlaz] = useState("red");
  const [leftSliderVal, setLeftSliderVal] = useState(5);
  const [rightSliderVal, setRightSliderVal] = useState(50);

  useEffect(() => {
    // Called only on FIRST render
    setFirstRenderTime(new Date().toISOString().substring(11));
  }, []);
  useEffect(() => {
    // Called only on EVERY render
    setTime2(new Date().toISOString().substring(11));
    return () => {
      // console.debug("Undo every effect");
    };
  });
  useEffect(() => {
    // Called only when Slider 1 is updated
    const now = new Date().toISOString().substring(11);
    setLeftSliderTime(now);
    return () => {
      // console.debug(`Slider was last updated ${now}`);
      setLastLSTime(now);
    };
  }, [leftSliderVal]);

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
        value={leftSliderVal}
        onChange={(ev) => {
          setLeftSliderVal(Number(ev.target.value));
        }}
      ></input>
      <input
        type="range"
        min={20}
        max={80}
        value={rightSliderVal}
        onChange={(ev) => {
          setRightSliderVal(Number(ev.target.value));
        }}
      ></input>
      <ul>
        <li>
          Left slider {leftSliderVal}, Right slider {rightSliderVal}
        </li>
      </ul>
      <table>
        <tr>
          <td>First render</td>
          <td>{firstRender}</td>
        </tr>
        <tr>
          <td>Last left slider update</td>
          <td>{lastLeftSliderTime}</td>
        </tr>
        <tr>
          <td>Left slider update</td>
          <td>{leftSliderUpdateTime}</td>
        </tr>
        <tr>
          <td>After render</td>
          <td>{renderTime}</td>
        </tr>
      </table>
    </>
  );
}
