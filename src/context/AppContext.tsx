import { createContext, useCallback, useState } from "react";
import { message } from "antd";

import { Ticket, User } from "../types";
import { getAllTickets, getAllUsers } from "../api";
import { TICKETS } from "../constants";

interface AppContextProps {
  isLoading: boolean;
  tickets: Ticket[];
  users: User[];
  error: unknown;
  getTickets: () => void;
  getUsers: () => void;
  deleteTicket: (_id: string) => Promise<void>;
}

export const AppContext = createContext({} as AppContextProps);

interface AppProviderProps {
  children: React.ReactNode | any;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<unknown>();

  const getTickets = useCallback(async function getData() {
    try {
      setIsLoading(true);
      const tickets = await getAllTickets();
      setTickets(tickets.data.tickets);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUsers = useCallback(async function getUsers() {
    try {
      setIsLoading(true);
      const users = await getAllUsers();
      setUsers(users.data.users);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function deleteTicket(_id: string) {
    try {
      setIsLoading(true);
      await fetch(`${TICKETS}/${_id}`, {
        method: "DELETE",
      });
      await getTickets();
      message.success("Ticket deleted");
    } catch (err: any) {
      alert(err.message);
      message.success(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        tickets,
        users,
        error,
        getTickets,
        getUsers,
        deleteTicket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
