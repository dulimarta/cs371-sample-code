import { Fragment, useContext } from "react";
import { MyAppData, TGlobalData } from "../global-data";
import { GCOne, GCTwo } from "./70-context-grandchild";
import "./70-context.css";
export function FirstChild(): JSX.Element {
  const gd = useContext(MyAppData);
  return (
    <>
      <div className="child">
        <h2 style={{ color: "white", backgroundColor: gd.favoriteColor }}>
          First Child
        </h2>
        <div className="gc-container">
          <GCOne enableUpdate />
          <GCTwo />
        </div>
      </div>
    </>
  );
}

export function SecondChild(): JSX.Element {
  return (
    <>
      <div className="child">
        <h2>Second Child</h2>
        <div className="gc-container">
          <GCOne />
          <GCTwo showPicker />
        </div>
      </div>
    </>
  );
}
