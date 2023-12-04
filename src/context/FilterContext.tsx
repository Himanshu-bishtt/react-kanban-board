import { createContext, useCallback, useState } from "react";

import { useApp } from "../hooks/UseApp";
import { Ticket } from "../types";
import { GROUPING, ORDERING, THEME } from "../constants";

interface FilterContextProps {
  theme: string;
  grouping: string;
  ordering: string;
  totalBoards: { status: string | number; items: Ticket[] }[];
  onTheme: (value: string) => void;
  onGrouping: (value: string) => void;
  onOrdering: (value: string) => void;
  getBoards: (value: string) => void;
}

export const FilterContext = createContext({} as FilterContextProps);

interface FilterProviderProps {
  children: React.ReactNode | any;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const { tickets } = useApp();
  const [grouping, setGrouping] = useState<string>(
    localStorage.getItem(GROUPING.NAME) || GROUPING.STATUS
  );
  const [ordering, setOrdering] = useState<string>(
    localStorage.getItem(ORDERING.NAME) || ORDERING.PRIORITY
  );
  const [theme, setTheme] = useState<string>(
    localStorage.getItem(THEME.NAME) || THEME.LIGHT
  );
  const [totalBoards, setTotalBoards] = useState<
    { status: string | number; items: Ticket[] }[]
  >([]);

  const getBoards = useCallback(
    function getBoards(value: string) {
      if (value === GROUPING.STATUS) {
        const totalBoards = Array.from(
          new Set(tickets.map((el: Ticket) => el.status))
        );
        const data = totalBoards.map((board) => {
          return {
            status: board,
            items: tickets.filter((ticket: Ticket) => ticket.status === board),
          };
        });
        setTotalBoards(data);
      } else if (value === GROUPING.USER) {
        const totalBoards = Array.from(
          new Set(tickets.map((el: Ticket) => el.userId))
        );
        const data = totalBoards.map((board) => {
          return {
            status: board,
            items: tickets.filter((ticket: Ticket) => ticket.userId === board),
          };
        });
        setTotalBoards(data);
      } else if (value === GROUPING.PRIORITY) {
        const totalBoards = Array.from(
          new Set(
            tickets
              .map((el: Ticket) => el.priority)
              .sort((a, b) => Number(b) - Number(a))
          )
        );
        const data = totalBoards.map((board) => {
          return {
            status: board,
            items: tickets.filter(
              (ticket: Ticket) => ticket.priority === board
            ),
          };
        });
        setTotalBoards(data);
      }
    },
    [tickets]
  );

  function handleTheme(value: string) {
    setTheme(value);
    localStorage.setItem(THEME.NAME, value);
  }

  function handleGrouping(value: string) {
    setGrouping(value);
    localStorage.setItem(GROUPING.NAME, value);
  }

  function handleOrdering(value: string) {
    setOrdering(value);
    localStorage.setItem(ORDERING.NAME, value);
  }

  return (
    <FilterContext.Provider
      value={{
        theme,
        grouping,
        ordering,
        totalBoards,
        getBoards,
        onTheme: handleTheme,
        onGrouping: handleGrouping,
        onOrdering: handleOrdering,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
