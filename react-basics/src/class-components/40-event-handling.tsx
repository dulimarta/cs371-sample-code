import { MouseEvent, Component } from "react";
import "../App.css";
export default class Sample extends Component<any, any> {
  city = "Chicago";

  doOne(e: MouseEvent<HTMLButtonElement>) {
    console.log("Button is click", e.target, this.city);
    alert("City is " + this.city);
  }
  doTwo = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button is click", e.target, this.city);
    alert("City is " + this.city);
  };
  mouseIn = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    el.className = "coloredBox";
  };
  mouseOut = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    el.className = "clearBox";
  };
  render(): JSX.Element {
    return (
      <>
        <h1>Class-Based Event Handling</h1>
        <div>
          <button onClick={(e) => this.doOne(e)}>Click Me</button>
          <button onClick={this.doTwo}>Click Me</button>
          <button onClick={this.doOne}>Wrong Button</button>
        </div>
        <div
          className="clearBox"
          onMouseEnter={this.mouseIn}
          onMouseLeave={this.mouseOut}></div>
      </>
    );
  }
}
