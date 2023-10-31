import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

import { Ticket } from "../../types";
import { useApp } from "../../hooks/UseApp";
import { getPriorityIcon } from "../../helpers";
import styles from "./Card.module.css";

interface CardProps {
  item: Ticket;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { users } = useApp();
  const user = users.find((user) => user.id === item.userId);
  const priorityIcon = getPriorityIcon(item.priority);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.userId}>{item.id}</p>
        <div className={styles.userInfo}>
          <span>
            {user?.available ? <GoDotFill color="#06cb06" /> : <GoDotFill />}
          </span>
          <p>{user?.name}</p>
        </div>
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
