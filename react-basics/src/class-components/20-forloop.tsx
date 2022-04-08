import { Component } from "react";
type Atom = {
  name: string;
  weight: number;
};
type MyState = {
  elements: Atom[];
};
const chemData: Atom[] = [
  { name: "Argon", weight: 39.948 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Fluor", weight: 19.998 },
  { name: "Galium", weight: 69.723 },
  { name: "Helium", weight: 4.0024 },
];

export default class Sample extends Component<any, MyState> {
  state = {
    elements: chemData,
  };

  render(): JSX.Element {
    return (
      <>
        <p>Chemical Elements (Class-based)</p>
        <ul>
          {this.state.elements.map((e: Atom, pos: number) => (
            <li key={pos}>
              {e.name} ({e.weight} daltons)
            </li>
          ))}
        </ul>
      </>
    );
  }
}
