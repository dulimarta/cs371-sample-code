import { Component, Fragment } from "react";
interface MyState {
  imageURL: string;
  pageURL: string;
}

export default class Sample extends Component<any, MyState> {
  state = {
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Sumatran_tiger.JPG",
    pageURL: "https://commons.wikimedia.org/wiki/File:Sumatran_tiger.JPG",
  };
  render(): JSX.Element {
    return (
      <>
        <img src={this.state.imageURL} alt="Sumatran Tiger" />
        <div>
          <a href={this.state.pageURL}>Photo</a> by Kevin1234,&nbsp;
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY</a>
        </div>
      </>
    );
  }
}
