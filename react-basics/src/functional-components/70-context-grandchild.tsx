import { ChangeEvent, useContext, useState } from "react";
import { MyAppData, TGlobalData } from "../global-data";
import "./70-context.css";
type MyProp = {
  enableUpdate?: boolean;
  showPicker?: boolean;
};

export function GCOne(props: MyProp): JSX.Element {
  const globalData: TGlobalData = useContext(MyAppData);
  const [num, setNum] = useState(1234);

  return (
    <div className="grandchild">
      <p>Grand child #1</p>
      {props.enableUpdate ? (
        <input
          style={{ color: "yellow" }}
          type="range"
          min={1000}
          max={9999}
          value={num}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            const n = Number(ev.target.value);
            setNum(n);
            globalData.changeCode(n);
          }}
        />
      ) : (
        <p>Access code {globalData.accessCode} </p>
      )}
    </div>
  );
}

export function GCTwo(props: MyProp): JSX.Element {
  // Access to global data
  const gd = useContext(MyAppData);

  function doColorUpdate(ev: ChangeEvent<HTMLInputElement>) {
    gd.changeColor(ev.target.value);
  }
  return (
    <div className="grandchild">
      <p>Grand child #2</p>
      {props.showPicker ? (
        <>
          <span>Color </span>
          <input
            type="color"
            value={gd.favoriteColor}
            onChange={doColorUpdate}
          ></input>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
