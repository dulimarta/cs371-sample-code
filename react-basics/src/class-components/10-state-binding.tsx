import { Component } from "react";
type MyState = {
  who: string;
  visitorNum: number;
};

export default class Sample extends Component<any, MyState> {
  state = {
    who: "Hello World!",
    visitorNum: 1037,
  };
  render(): JSX.Element {
    return (
      <div>
        <h1>Hello {this.state.who}</h1>
        <p>You are visitor #{this.state.visitorNum} to Class Component</p>
      </div>
    );
  }
}
