import { Component } from "react";
import Child from "./60-lifecycle-child";
interface MyState {
  includeChild: boolean;
}
export default class Sample extends Component<any, MyState> {
  state = {
    includeChild: true,
  };
  componentDidMount(): void {
    console.log("Parent DidMount()");
  }
  componentDidUpdate(): void {
    console.log("Parent DidUpdate()");
  }
  componentWillUnmount(): void {
    console.log("Parent WillUnmount()");
  }
  shouldComponentUpdate(): boolean {
    console.log("should Parent update?");
    return true;
  }

  detach = () => {
    this.setState({ includeChild: false });
  };
  render(): JSX.Element {
    console.log("In Parent render()");
    // throw "Error";
    return (
      <>
        <h1>Class-based LifeCycle Demo</h1>
        <button onClick={this.detach}>Remove Child</button>
        {this.state.includeChild && <Child></Child>}
      </>
    );
  }
}
