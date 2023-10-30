import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("AppContext was used outside AppProvider");
  return context;
}
