import { useApp } from "../../hooks/UseApp";
import { useFilter } from "../../hooks/UseFilter";
import { BOARD_BUTTONS } from "../../constants";
import { Ticket } from "../../types";
import { setBoardName, setFilteredItems } from "../../helpers";
import styles from "./Board.module.css";
import CardContainer from "../Card/CardContainer";

interface BoardProps {
  name: string | number;
  items: Ticket[];
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
      <CardContainer filteredItems={filteredItems} />
    </div>
  );
};

export default Board;
