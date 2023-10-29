import { BiPlus, BiDotsHorizontalRounded } from "react-icons/bi";

import Card from "../Card/Card";
import styles from "./Board.module.css";
import { Ticket, User } from "./BoardContainer";

interface BoardProps {
  name: string;
  items: Ticket[];
  users: User[];
}

const Board: React.FC<BoardProps> = ({ name, items, users }) => {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.boardInfo}>
            <p>{name}</p>
            <p>({items.length})</p>
          </div>
        </div>

        <div className={styles.right}>
          <button>
            <BiPlus />
          </button>
          <button>
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {items.map((item) => (
          <Card key={item.id} item={item} users={users} />
        ))}
      </div>
    </div>
  );
};

export default Board;
