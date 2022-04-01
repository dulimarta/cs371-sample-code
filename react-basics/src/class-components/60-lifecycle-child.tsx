import { Component } from "react";
interface MyState {
  count: number;
}
export default class Sample extends Component<any, MyState> {
  private timer: any | null = null;
  state = {
    count: 1,
  };
  componentDidMount(): void {
    console.log("Child DidMount()");
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 5000);
  }
  componentDidUpdate(oldProps: any, oldState: MyState): void {
    console.log("Child DidUpdate() from old state", oldState);
  }
  componentWillUnmount(): void {
    clearInterval(this.timer);
    console.log("Child WillUnmount()");
  }
  shouldComponentUpdate(nextProps: any, nextState: MyState): boolean {
    console.log("should Child update?", nextState);
    return nextState.count < 6;
  }
  stopTimer = () => {
    clearInterval(this.timer);
  };
  changeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render(): JSX.Element {
    console.log("In Child render()");
    return (
      <>
        <h1>LifeCycle Demo child count {this.state.count}</h1>
        <button onClick={this.stopTimer}>Stop me</button>
        <button onClick={this.changeCount}>Add 1</button>
      </>
    );
  }
}
