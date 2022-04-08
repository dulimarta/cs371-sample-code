import { createContext } from "react";

export type TGlobalData = {
  accessCode: number;
  favoriteColor: string;
  changeCode: (_: number) => void;
  changeColor: (_: string) => void;
};
export const MyAppData = createContext<TGlobalData>(undefined!);
