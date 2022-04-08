import { Component } from "react";
type MyProp = {
  hour: number;
  minute: number;
  label: string;
  pm?: boolean;
};
export default class Clock extends Component<MyProp, any> {
  render(): JSX.Element {
    return (
      <>
        <p>
          Class-based Time in {this.props.label} is {this.props.hour}:
          {this.props.minute} {this.props.pm ? "PM" : "AM"}
        </p>
      </>
    );
  }
}
