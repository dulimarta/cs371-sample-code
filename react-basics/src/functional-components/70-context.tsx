import { useContext } from "react";
import { AppData, ISharedData } from "../func-components/global-data";
export default function Sample(): JSX.Element {
  const globalData: ISharedData = useContext(AppData);

  return (
    <>
      <h1>Hello functional context by {globalData.author}</h1>
      <button onClick={(e) => globalData.updateAuthor("React Developer")}>
        Update
      </button>
    </>
  );
}
