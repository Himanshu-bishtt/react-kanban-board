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
  { id: 1, value: GROUPING.STATUS, content: "Status" },
  { id: 2, value: GROUPING.PRIORITY, content: "Priority" },
  { id: 3, value: GROUPING.USER, content: "User" },
];

export const ORDERING_OPTIONS = [
  { id: 1, value: ORDERING.PRIORITY, content: "Priority" },
  { id: 2, value: ORDERING.TITLE, content: "Title" },
];

export const THEME_OPTIONS = [
  { id: 1, value: THEME.LIGHT, content: "Light" },
  { id: 2, value: THEME.DARK, content: "Dark" },
];

export const BOARD_BUTTONS = [
  { id: 1, icon: <BiPlus /> },
  { id: 2, icon: <BiDotsHorizontalRounded /> },
];
