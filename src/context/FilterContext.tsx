import { createContext, useContext, useState } from "react";

interface FilterContextProps {
  grouping: string;
  ordering: string;
  setGrouping: React.Dispatch<React.SetStateAction<string>>;
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext({} as FilterContextProps);

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
