import { createContext, useCallback, useState } from "react";

import { Ticket, User } from "../types";
import { TICKETS, USERS } from "../constants";

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
      const tickets = await fetch(TICKETS);
      if (!tickets.ok) throw new Error("Error loading data. Please try again");
      const ticketsData = await tickets.json();

      const users = await fetch(USERS);
      if (!users.ok) throw new Error("Error loading data. Please try again");
      const usersData = await users.json();

      setTickets(ticketsData.data.tickets);
      setUsers(usersData.data.users);
    } catch (err) {
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
