import { useContext } from "react";
import { MyAppData, TGlobalData } from "../global-data";
import { FirstChild, SecondChild } from "./70-context-child";
import "./70-context.css";
export default function Sample(): JSX.Element {
  const globalData: TGlobalData = useContext(MyAppData);

  const spanCode = (
    <span style={{ color: globalData.favoriteColor }}>
      React@{globalData.accessCode}
    </span>
  );
  return (
    <>
      <h1>Context Demo: access code is {spanCode}</h1>
      {/* <button onClick={(e) => globalData.changeCode("React@1991")}>
        Update
      </button> */}
      <div id="container">
        <FirstChild />
        <SecondChild />
      </div>
    </>
  );
}
