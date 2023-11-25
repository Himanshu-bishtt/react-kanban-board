import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { SlOptions } from "react-icons/sl";

import { Ticket } from "../../types";
import { useApp } from "../../hooks/UseApp";
import { getPriorityIcon } from "../../helpers";
import styles from "./Card.module.css";

interface CardProps {
  ticket: Ticket;
}

const Card: React.FC<CardProps> = ({ ticket }) => {
  const { users } = useApp();
  const user = users.find((user) => user.name === ticket.userId);
  const priorityIcon = getPriorityIcon(ticket.priority);

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
          {ticket.tag.map((t, index) => (
            <div className={styles.tags} key={`card-tag-${index}`}>
              <AiOutlineCheckCircle />
              <p>{t}</p>
            </div>
          ))}
        </div>
        <div className={styles.deleteCard}>
          <button onClick={() => {}}>
            <SlOptions />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
