import Card from "../Card/Card";
import styles from "./Board.module.css";
import { Ticket, User } from "./BoardContainer";
import { BOARD_BUTTONS } from "../../constants";
import { priorityMap } from "../../helpers";
import { useApp } from "../../hooks/UseApp";
import { useFilter } from "../../hooks/UseFilter";

interface BoardProps {
  name: string | number;
  items: Ticket[];
}

function setBoardName(grouping: string, name: string | number, users: User[]) {
  switch (grouping) {
    case "priority":
      return priorityMap(name);
    case "user":
      return users?.find((user) => user.id === name)?.name;
    case "status":
      return name;
  }
}

function setFilteredItems(ordering: string, items: Ticket[]) {
  switch (ordering) {
    case "priority":
      return items.sort((a, b) => b.priority - a.priority);

    case "title":
      return items.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        else return 0;
      });
  }
}

const Board: React.FC<BoardProps> = ({ name, items }) => {
  const { users } = useApp();
  const { grouping, ordering } = useFilter();
  const boardName = setBoardName(grouping, name, users);
  const filteredItems = setFilteredItems(ordering, items);

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
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Board;
