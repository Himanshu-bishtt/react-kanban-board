import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { BiTrashAlt, BiEdit } from "react-icons/bi";

import { Ticket } from "../../types";
import { useApp } from "../../hooks/UseApp";
import { getPriorityIcon } from "../../helpers";
import styles from "./Card.module.css";

interface CardProps {
  ticket: Ticket;
}

const Card: React.FC<CardProps> = ({ ticket }) => {
  const { users, deleteTicket, setUpdateTicketModal, getTicket } = useApp();
  const user = users.find((user) => user.name === ticket.userId);
  const priorityIcon = getPriorityIcon(ticket.priority);
  const tags = ticket.tag as string[];

  function handleTicketDelete() {
    deleteTicket(ticket._id);
  }

  function handleTicketUpdate() {
    setUpdateTicketModal(true);
    getTicket(ticket._id);
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.userId}>{ticket._id}</p>
        <div className={styles.userInfo}>
          <span>
            {user?.available ? <GoDotFill color="#06cb06" /> : <GoDotFill />}
          </span>
          <p>{ticket.userId}</p>
        </div>
      </div>
      <p className={styles.title}>{ticket.title}</p>
      <div className={styles.content}>
        <div>
          <span>{priorityIcon}</span>
          {tags.map((t, index) => (
            <div className={styles.tags} key={`card-tag-${index}`}>
              <AiOutlineCheckCircle />
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>
      <ul className={styles.deleteCardOptions}>
        <li
          role="button"
          className={styles.deleteCardOption}
          onClick={handleTicketUpdate}
        >
          <BiEdit />
          <p>Edit</p>
        </li>
        <li
          role="button"
          className={styles.deleteCardOption}
          onClick={handleTicketDelete}
        >
          <BiTrashAlt />
          <p>Delete</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
