import { useContext } from "react";

import { AppContext } from "../context/AppContext";

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside AppProvider");
  return context;
}
