import { atom } from "recoil";
import { Ticket } from "../types";

export const currentTicket = atom({
  key: "current-ticket",
  default: {} as Ticket,
});
