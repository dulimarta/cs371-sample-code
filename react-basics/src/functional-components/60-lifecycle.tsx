import { useState, useEffect, useRef } from "react";
import Child from "./60-lifecycle-child";
export default function Sample(): JSX.Element {
  const [withChild, changeWithChild] = useState(true);
  const labels = useRef(["pen", "cup", "door", "desk"]);
  const [label, setLabel] = useState(labels.current[0]);
  useEffect(() => {
    console.log("Parent DidMount()");
    let labelIndex = 0;
    setInterval(() => {
      labelIndex++;
      if (labelIndex === labels.current.length) labelIndex = 0;
      setLabel(labels.current[labelIndex]);
    }, 5000);
    return () => {
      console.log("Parent WillUnmount()");
    };
  }, []);
  useEffect(() => {
    console.log("Parent DidUpdate()");
  });

  function detach() {
    changeWithChild(false);
  }

  return (
    <>
      <h1>Functional LifeCycle Demo</h1>
      <button onClick={detach}>Remove Child</button>
      <p>Label is {label}</p>
      {withChild && <Child label={label}></Child>}
    </>
  );
}
