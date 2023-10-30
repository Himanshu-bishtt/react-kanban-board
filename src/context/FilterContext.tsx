import { createContext, useState } from "react";
import { useApp } from "../hooks/UseApp";
import { Ticket } from "../components/Board/BoardContainer";

interface FilterContextProps {
  grouping: string;
  ordering: string;
  itemsPerBoard: { status: string | number; items: Ticket[] }[];
  onGrouping: (value: string) => void;
  onOrdering: (value: string) => void;
}

export const FilterContext = createContext({} as FilterContextProps);

interface FilterProviderProps {
  children: React.ReactNode | any;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const { tickets } = useApp();
  const [grouping, setGrouping] = useState<string>(
    localStorage.getItem("grouping") || "status"
  );
  const [ordering, setOrdering] = useState<string>(
    localStorage.getItem("ordering") || "priority"
  );
  const [itemsPerBoard, setItemsPerBoard] = useState<
    { status: string | number; items: Ticket[] }[]
  >([]);

  function handleGrouping(value: string) {
    setGrouping(value);
    localStorage.setItem("grouping", value);

    if (value === "status") {
      const totalBoards = Array.from(
        new Set(tickets.map((el: Ticket) => el.status))
      );

      const data = totalBoards.map((board) => {
        return {
          status: board,
          items: tickets.filter((ticket: Ticket) => ticket.status === board),
        };
      });

      setItemsPerBoard(data);
    } else if (value === "user") {
      const totalBoards = Array.from(
        new Set(tickets.map((el: Ticket) => el.userId))
      );
      const data = totalBoards.map((board) => {
        return {
          status: board,
          items: tickets.filter((ticket: Ticket) => ticket.userId === board),
        };
      });
      setItemsPerBoard(data);
    } else if (value === "priority") {
      const totalBoards = Array.from(
        new Set(tickets.map((el: Ticket) => el.priority).sort((a, b) => b - a))
      );
      const data = totalBoards.map((board) => {
        return {
          status: board,
          items: tickets.filter((ticket: Ticket) => ticket.priority === board),
        };
      });
      setItemsPerBoard(data);
    }
  }

  function handleOrdering(value: string) {
    setOrdering(value);
    localStorage.setItem("ordering", value);
  }

  return (
    <FilterContext.Provider
      value={{
        grouping,
        ordering,
        itemsPerBoard,
        onGrouping: handleGrouping,
        onOrdering: handleOrdering,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
