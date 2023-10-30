import { createContext, useCallback, useContext, useState } from "react";
import { Ticket, User } from "../components/Board/BoardContainer";

export const AppContext = createContext({});

interface AppProviderProps {
  children: React.ReactNode | any;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [grouping, setGrouping] = useState<string>("status");
  const [ordering, setOrdering] = useState<string>("priority");
  const [error, setError] = useState<unknown>();

  const getData = useCallback(async function getData() {
    try {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        tickets,
        users,
        grouping,
        ordering,
        error,
        getData,
        setGrouping,
        setOrdering,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside AppProvider");
  return context;
}
