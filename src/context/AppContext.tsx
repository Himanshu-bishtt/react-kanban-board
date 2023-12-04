import { createContext, useCallback, useState } from "react";
import { message } from "antd";

import { Ticket, User } from "../types";
import { create, remove, getAll } from "../api/Tickets";
import { getAllUsers } from "../api/Users";

interface AppContextProps {
  isLoading: boolean;
  tickets: Ticket[];
  users: User[];
  error: unknown;
  getTickets: () => void;
  getUsers: () => void;
  deleteTicket: (_id: string) => Promise<void>;
  createTickets: (ticket: Ticket) => Promise<void>;
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
      const tickets = await getAll();
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
      await remove(_id);
      await getTickets();
      message.success("Ticket deleted");
    } catch (err: any) {
      message.error(err.message);
    }
  }

  async function createTickets(ticket: Ticket) {
    try {
      await create(ticket);
      await getTickets();
      message.success("Ticket created");
    } catch (err: any) {
      message.error(err.message);
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
        createTickets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
