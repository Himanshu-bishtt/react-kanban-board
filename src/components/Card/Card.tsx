import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";

import styles from "./Card.module.css";
import { Ticket } from "../Board/BoardContainer";
import { useApp } from "../../hooks/UseApp";

interface CardProps {
  item: Ticket;
}

function getPriorityIcon(priority: number) {
  let priorityIcon;
  switch (priority) {
    case 4:
      priorityIcon = <IoWarningOutline color="red" />;
      break;

    case 3:
      priorityIcon = <FcHighPriority />;
      break;

    case 2:
      priorityIcon = <FcMediumPriority />;
      break;

    case 1:
      priorityIcon = <FcLowPriority />;
      break;

    case 0:
      priorityIcon = <BiDotsHorizontalRounded />;
      break;
  }

  return priorityIcon;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { users } = useApp();
  const priorityIcon = getPriorityIcon(item.priority);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>{item.id}</p>
        {/* <img src="https://i.pravatar.cc/24?u=118836" alt="user image" /> */}
        <p>{users.find((user) => user.id === item.userId)?.name}</p>
      </div>
      <p className={styles.title}>{item.title}</p>
      <div className={styles.content}>
        <span>{priorityIcon}</span>
        {item.tag.map((t, index) => (
          <div key={`card-tag-${index}`}>
            <AiOutlineCheckCircle />
            <p>{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
