import { createContext, ReactNode, useState } from "react";

export interface ISharedData {
  author: string;
  updateAuthor: (_: string) => void;
}
interface MyProp {
  children: ReactNode;
}
export const AppData = createContext<ISharedData>(undefined!);

export function AppDataProvider(prop: MyProp): JSX.Element {
  const [name, setName] = useState("Initial Author");

  return (
    <>
      <AppData.Provider value={{ author: name, updateAuthor: setName }}>
        {prop.children}
      </AppData.Provider>
    </>
  );
}
