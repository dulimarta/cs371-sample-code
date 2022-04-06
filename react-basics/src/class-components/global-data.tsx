import { createContext, Component } from "react";

export interface ISharedState {
  author: string;
  updateAuthor?: (_: string) => void;
}
export const AppData = createContext<ISharedState>(undefined!);

export class AppDataProvider extends Component<any, ISharedState> {
  componentDidMount(): void {
    this.setState({
      author: "No one",
      updateAuthor: (s) => this.updateAuthor(s),
    });
  }
  updateAuthor = (x: string): void => {
    this.setState((s) => {
      return s.author !== x
        ? { author: x }
        : {
            author: "Web Developer",
          };
    });
  };
  render(): JSX.Element {
    return (
      <AppData.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppData.Provider>
    );
  }
}
