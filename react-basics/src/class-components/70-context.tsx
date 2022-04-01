import { Component } from "react";
import { AppData, ISharedState } from "./global-data";
export default class Sample extends Component {
  render(): JSX.Element {
    return (
      <AppData.Consumer>
        {(z: ISharedState) => (
          <>
            <h1>Hello class-based context by {z.author}</h1>
            <button
              onClick={(e) =>
                z.updateAuthor ? z.updateAuthor("React Developer") : undefined
              }>
              Update Global State
            </button>
          </>
        )}
      </AppData.Consumer>
    );
  }
}
