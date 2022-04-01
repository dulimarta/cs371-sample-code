import { Component } from "react";
import "../45-state-update.css";
interface MyState {
  color: string;
}
export default class Sample extends Component<any, MyState> {
  state = {
    color: "inherit",
  };
  selectColor = (): void => {
    const hue = Math.round(Math.random() * 360);

    // Option 1: use object syntax
    // this.setState({ color: `hsl(${hue}, 75%, 75%)` });
    // Option 2: use function syntax
    this.setState((x: MyState) => {
      return {
        color: `hsl(${hue}, 75%, 75%)`,
      };
    });
  };
  render(): JSX.Element {
    return (
      <>
        <h2>Class-based Random Color</h2>
        <button onClick={this.selectColor}>Random Color</button>
        <p>{this.state.color}</p>
        {/* We use  {{ and }} below because the inner curly braces
            are enclosing a CSS Rule object !*/}
        <div id="box" style={{ backgroundColor: this.state.color }}></div>
      </>
    );
  }
}
