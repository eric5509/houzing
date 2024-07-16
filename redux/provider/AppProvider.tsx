"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

type Props = {
  children: ReactNode;
};
export default function AppProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
 