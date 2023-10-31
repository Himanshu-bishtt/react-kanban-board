import { useState } from "react";
import {
  BiChevronDown,
  BiChevronUp,
  BiDotsHorizontalRounded,
} from "react-icons/bi";

import { useApp } from "../../hooks/UseApp";
import { useFilter } from "../../hooks/UseFilter";
import { Ticket } from "../../types";
import { setBoardName, setFilteredItems } from "../../helpers";
import CardContainer from "../Card/CardContainer";
import styles from "./Board.module.css";

interface BoardProps {
  name: string | number;
  items: Ticket[];
}

const Board: React.FC<BoardProps> = ({ name, items }) => {
  const { users } = useApp();
  const [showCards, setShowCards] = useState(true);
  const { grouping, ordering } = useFilter();
  const boardName = setBoardName(grouping, name, users);
  const filteredItems = setFilteredItems(ordering, items);

  function handleShowCards() {
    setShowCards((prev) => !prev);
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
          <button onClick={handleShowCards}>
            <span>{showCards ? <BiChevronUp /> : <BiChevronDown />}</span>
          </button>
          <button>
            <span>
              <BiDotsHorizontalRounded />
            </span>
          </button>
        </div>
      </div>
      {showCards && <CardContainer filteredItems={filteredItems} />}
      {!showCards && (
        <p className={styles.hideCards}>Click on arrow icon to show tickets</p>
      )}
    </div>
  );
};

export default Board;
