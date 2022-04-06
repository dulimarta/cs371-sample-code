import { useState } from "react";
import "../45-state-update.css";
export default function Sample(): JSX.Element {
  const [color, setColor] = useState("inherit");

  function selectColor(): void {
    const hue = Math.round(Math.random() * 360);

    // Option 1: use value syntax
    // setColor(`hsl(${hue}, 75%, 75%)`);

    // Option 2: use function syntax
    setColor((s: string) => {
      return `hsl(${hue}, 75%, 75%)`;
    });
  }

  return (
    <>
      <h1>Functional Random Color</h1>
      <button onClick={selectColor}>Random Color</button>
      <p>{color}</p>
      {/* We use  {{ and }} below because the inner curly braces
            are enclosing a CSS Rule object !*/}
      <div id="box" style={   { backgroundColor: color }    }></div>
    </>
  );
}
