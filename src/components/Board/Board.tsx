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
  const { grouping, ordering } = useFilter();

  let boardName;
  if (grouping === "priority") {
    boardName = priorityMap(name);
  } else if (grouping === "user") {
    boardName = users.find((user) => user.id === name)?.name;
  } else if (grouping === "status") {
    boardName = name;
  }

  let filteredItems;
  if (ordering === "priority") {
    filteredItems = items.sort((a, b) => b.priority - a.priority);
  } else if (ordering === "title") {
    filteredItems = items.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    });
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
        {filteredItems?.map((item) => (
          <Card key={item.id} item={item} users={users} />
        ))}
      </div>
    </div>
  );
};

export default Board;
