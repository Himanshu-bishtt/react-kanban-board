/* eslint-disable react-refresh/only-export-components */
import { BiDotsHorizontalRounded, BiPlus } from "react-icons/bi";

export const GROUPING = {
  NAME: "grouping",
  STATUS: "status",
  PRIORITY: "priority",
  USER: "user",
};

export const ORDERING = {
  NAME: "ordering",
  PRIORITY: "priority",
  TITLE: "title",
};

export const THEME = {
  NAME: "theme",
  LIGHT: "light",
  DARK: "dark",
};

export const PRIORITY = {
  NAME: "priority",
  URGENT: "Urgent",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
  NO_PRIORITY: "No Priority",
};

export const GROUPING_OPTIONS = [
  { id: 1, value: GROUPING.STATUS, label: "Status" },
  { id: 2, value: GROUPING.PRIORITY, label: "Priority" },
  { id: 3, value: GROUPING.USER, label: "User" },
];

export const ORDERING_OPTIONS = [
  { id: 1, value: ORDERING.PRIORITY, label: "Priority" },
  { id: 2, value: ORDERING.TITLE, label: "Title" },
];

export const THEME_OPTIONS = [
  { id: 1, value: THEME.LIGHT, label: "Light" },
  { id: 2, value: THEME.DARK, label: "Dark" },
];

export const BOARD_BUTTONS = [
  { id: 1, icon: <BiPlus /> },
  { id: 2, icon: <BiDotsHorizontalRounded /> },
];

export const TICKETS =
  "https://react-kanban-board-backend-production.up.railway.app/api/v1/tickets";

export const USERS =
  "https://react-kanban-board-backend-production.up.railway.app/api/v1/users";
