import { createContext, useCallback, useContext, useState } from "react";
import { Ticket, User } from "../components/Board/BoardContainer";

interface AppContextProps {
  tickets: Ticket[];
  users: User[];
  error: unknown;
  getData: () => void;
}

export const AppContext = createContext({} as AppContextProps);

interface AppProviderProps {
  children: React.ReactNode | any;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<unknown>();

  const getData = useCallback(async function getData() {
    try {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (!res.ok) throw new Error("Error loading data. Please try again");
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
        error,
        getData,
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
