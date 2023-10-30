import { createContext, useContext, useState } from "react";

export const FilterContext = createContext({});

interface FilterProviderProps {
  children: React.ReactNode | any;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [grouping, setGrouping] = useState<string>("status");
  const [ordering, setOrdering] = useState<string>("priority");

  return (
    <FilterContext.Provider
      value={{
        grouping,
        ordering,
        setGrouping,
        setOrdering,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("AppContext was used outside AppProvider");
  return context;
}
