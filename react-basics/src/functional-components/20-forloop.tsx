import React, { useState } from "react";
interface Atom {
  name: string;
  weight: number;
}
const chemData: Atom[] = [
  { name: "Argon", weight: 39.948 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Fluor", weight: 19.998 },
  { name: "Galium", weight: 69.723 },
  { name: "Helium", weight: 4.0024 },
];

export default function Sample(): JSX.Element {
  const [elements] = useState(chemData);

  return (
    <>
      <p>Chemical Elements (Functional)</p>
      <ul>
        {elements.map((e: Atom, pos: number) => (
          <li key={pos}>
            {e.name} ({e.weight} daltons)
          </li>
        ))}
      </ul>
      {elements.map((e: Atom, pos: number) => (
        <React.Fragment key={pos}>
          <h2>Chemical element {e.name}</h2>
          <p>Atomic weight is {e.weight} AMUs</p>
        </React.Fragment>
      ))}
    </>
  );
}
