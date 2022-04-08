import { useState } from "react";
import Sample from "./functional-components/70-context-parent";
import { MyAppData } from "./global-data";
export default function App() {
  const [myCode, setCode] = useState(1234);
  const [favoriteColor, changeColor] = useState("red");

  return (
    <MyAppData.Provider
      value={{
        accessCode: myCode,
        changeCode: setCode,
        favoriteColor,
        changeColor,
      }}
    >
      <Sample />
    </MyAppData.Provider>
  );
}
