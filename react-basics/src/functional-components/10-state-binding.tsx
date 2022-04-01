import { useState } from "react";

/* Use the FAT ARROW syntax */
const Sample = (): JSX.Element => {
  const rand = Math.round(Math.random() * 300);
  const [who] = useState("World");
  const [visitorNum] = useState(1037 + rand);
  return (
    <div>
      <h1>Hello {who}</h1>
      <p>You are visitor #{visitorNum} to functional component</p>
    </div>
  );
};

/* Use the named function syntax */
function Or_Sample(): JSX.Element {
  const rand = Math.round(Math.random() * 300);
  const [who] = useState("Hello from Functional World!");
  const [visitorNum] = useState(1037 + rand);

  return (
    <div>
      <h1>Hello {who}</h1>
      <p>You are visitor #{visitorNum} to functional component</p>
    </div>
  );
}

export default Sample;
