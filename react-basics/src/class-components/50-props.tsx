import { Component } from "react";
// import Clock from "../func-components/50-props-clock";
import Clock from "./50-props-clock";
export default class Sample extends Component {
  render(): JSX.Element {
    return (
      <>
        <Clock hour={5} minute={31} label={"Chicago"}></Clock>
        <Clock hour={9} minute={47} label={"Tokyo"} pm></Clock>
      </>
    );
  }
}
