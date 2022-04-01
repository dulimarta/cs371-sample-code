import React, { useEffect, useRef, useState } from "react";
interface MyProp {
  label: string;
}
function Sample(p: MyProp): JSX.Element {
  const [count, setCount] = useState(1);
  const timer = useRef<any>();
  useEffect(() => {
    console.log("Child effect: with [count] dependency");
    console.log("Child DidUpdate()");
    timer.current = setInterval(() => {
      // console.log("Periodic interval");
      setCount((c: number) => c + 1);
    }, 1000);
    return () => {
      console.log("Clear timer");
      clearInterval(timer.current);
    };
  }, []);
  function stopTimer() {
    clearInterval(timer.current);
  }
  function changeCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>
        LifeCycle Demo child count {count} {p.label}
        {count > 1 ? "s" : ""}
      </h1>
      <button onClick={stopTimer}>Stop me</button>
      <button onClick={changeCount}>Add 1</button>
    </>
  );
}

export default React.memo(Sample, (a: MyProp, b: MyProp) => {
  console.log("Prop changed from ", a, "to", b);
  return a.label === b.label;
});
