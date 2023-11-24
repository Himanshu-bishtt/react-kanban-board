import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { RiCalendarTodoLine } from "react-icons/ri";
import { TbProgress } from "react-icons/tb";
import { IoWarningOutline } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";
import { FcWorkflow } from "react-icons/fc";

import { Ticket, User } from "../types";
import { GROUPING, ORDERING, PRIORITY } from "../constants";

export function getInitials(name: string) {
  const words = name.split(" ");
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }
  return initials;
}

export function priorityMap(priority: number | string) {
  switch (priority) {
    case 4:
      return PRIORITY.URGENT;
    case 3:
      return PRIORITY.HIGH;
    case 2:
      return PRIORITY.MEDIUM;
    case 1:
      return PRIORITY.LOW;
    case 0:
      return PRIORITY.NO_PRIORITY;
  }
}

export function reversePriorityMap(priority: number | string | undefined) {
  switch (priority) {
    case PRIORITY.URGENT:
      return 4;
    case PRIORITY.HIGH:
      return 3;
    case PRIORITY.MEDIUM:
      return 2;
    case PRIORITY.LOW:
      return 1;
    case PRIORITY.NO_PRIORITY:
      return 0;
    default:
      return -1;
  }
}

export function getStatusIcon(status: string | number | undefined) {
  switch (status) {
    case "Todo":
      return <RiCalendarTodoLine />;
    case "In progress":
      return <TbProgress />;
    case "Backlog":
      return <BiLogInCircle />;
  }
}

export function getPriorityIcon(priority: number) {
  switch (priority) {
    case 4:
      return <IoWarningOutline color="red" />;
    case 3:
      return <FcHighPriority />;
    case 2:
      return <FcMediumPriority />;
    case 1:
      return <FcLowPriority />;
    case 0:
      return <FcWorkflow />;
  }
}

export function setBoardIcon(
  grouping: string,
  boardName: number | string | undefined
) {
  switch (grouping) {
    case GROUPING.STATUS:
      return getStatusIcon(boardName);
    case GROUPING.PRIORITY:
      return getPriorityIcon(reversePriorityMap(boardName));
    default:
      return null;
  }
}

export function setBoardName(
  grouping: string,
  name: string | number,
  users: User[]
) {
  switch (grouping) {
    case GROUPING.PRIORITY:
      return priorityMap(name);
    case GROUPING.USER:
      return users?.find((user) => user.id === name)?.name;
    case GROUPING.STATUS:
      return name;
  }
}

export function setFilteredItems(ordering: string, items: Ticket[]) {
  switch (ordering) {
    case ORDERING.PRIORITY:
      return items.sort((a, b) => b.priority - a.priority);
    case ORDERING.TITLE:
      return items.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        else return 0;
      });
  }
}
