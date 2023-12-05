import { createContext, useCallback, useState } from "react";
import { message } from "antd";

import { Ticket, User } from "../types";
import { create, remove, getAll, get, update } from "../api/Tickets";
import { getAllUsers } from "../api/Users";

interface AppContextProps {
  isLoading: boolean;
  tickets: Ticket[];
  currentTicket: Ticket;
  setCurrentTicket: React.Dispatch<React.SetStateAction<Ticket>>;
  users: User[];
  error: unknown;
  updateTicketModal: boolean;
  setUpdateTicketModal: React.Dispatch<React.SetStateAction<boolean>>;
  getTickets: () => void;
  getTicket: (_id: string | undefined) => Promise<void>;
  getUsers: () => void;
  deleteTicket: (_id: string | undefined) => Promise<void>;
  createTickets: (ticket: Ticket) => Promise<void>;
  updateTickets: (ticket: Ticket, _id: string | undefined) => Promise<void>;
}

export const AppContext = createContext({} as AppContextProps);

interface AppProviderProps {
  children: React.ReactNode | any;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updateTicketModal, setUpdateTicketModal] = useState<boolean>(false);
  const [currentTicket, setCurrentTicket] = useState<Ticket>({} as Ticket);
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

  async function getTicket(_id: string | undefined) {
    try {
      setIsLoading(true);
      const ticket = await get(_id);
      setCurrentTicket(ticket.data.ticket);
    } catch (err: any) {
      message.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteTicket(_id: string | undefined) {
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

  async function updateTickets(ticket: Ticket, _id: string | undefined) {
    try {
      await update(ticket, _id);
      await getTickets();
      message.success("Ticket updated");
    } catch (err: any) {
      message.error(err.message);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        updateTicketModal,
        currentTicket,
        tickets,
        users,
        error,
        setCurrentTicket,
        setUpdateTicketModal,
        getTickets,
        getTicket,
        getUsers,
        deleteTicket,
        createTickets,
        updateTickets,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
