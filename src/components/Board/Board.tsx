import Card from "../Card/Card";
import styles from "./Board.module.css";
import { Ticket, User } from "./BoardContainer";
import { BOARD_BUTTONS } from "../../constants";
import { useFilter } from "../../context/FilterContext";
import { priorityMap } from "../../helpers";

interface BoardProps {
  name: string | number;
  items: Ticket[];
  users: User[];
}

const Board: React.FC<BoardProps> = ({ name, items, users }) => {
  const { grouping } = useFilter();

  let boardName;
  if (grouping === "priority") {
    boardName = priorityMap(name);
  } else if (grouping === "user") {
    boardName = users.find((user) => user.id === name)?.name;
  } else if (grouping === "status") {
    boardName = name;
  }

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.boardInfo}>
            <p>{boardName}</p>
            <p>({items.length})</p>
          </div>
        </div>

        <div className={styles.right}>
          {BOARD_BUTTONS.map((button) => (
            <button key={button.id}>{button.icon}</button>
          ))}
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
