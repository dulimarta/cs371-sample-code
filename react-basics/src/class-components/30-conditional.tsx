import { Component } from "react";
type MyState = {
  now: Date;
};
export default class Sample extends Component<any, MyState> {
  state = {
    now: new Date(),
  };

  render(): JSX.Element {
    const hr = this.state.now.getHours();
    const greeting =
      hr < 12 ? "Good Morning" : hr < 18 ? "Good Afternoon" : "Good Evening";

    return (
      <>
        <h3>
          You visited class-based component at {this.state.now.toTimeString()}
        </h3>
        <p>{greeting}</p>
      </>
    );
  }
}
