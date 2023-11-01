import { useEffect, useState } from "react";
import {
  BiChevronDown,
  BiChevronUp,
  BiDotsHorizontalRounded,
} from "react-icons/bi";

import { useApp } from "../../hooks/UseApp";
import { useFilter } from "../../hooks/UseFilter";
import { Ticket } from "../../types";
import { setBoardIcon, setBoardName, setFilteredItems } from "../../helpers";
import CardContainer from "../Card/CardContainer";
import styles from "./Board.module.css";
import Message from "../UI/Message";

interface BoardProps {
  name: string | number;
  items: Ticket[];
}

const Board: React.FC<BoardProps> = ({ name, items }) => {
  const { users } = useApp();
  const [showCards, setShowCards] = useState(true);
  const { grouping, ordering } = useFilter();
  const boardName = setBoardName(grouping, name, users);
  const boardIcon = setBoardIcon(grouping, boardName);
  const filteredItems = setFilteredItems(ordering, items);
  const totalBoardItems = items.length;

  function handleShowCards() {
    setShowCards((prev) => !prev);
  }

  useEffect(() => {
    setShowCards(true);
  }, [grouping, ordering]);

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.boardInfo}>
            <span>{boardIcon}</span>
            <p>{boardName}</p>
            <p>({totalBoardItems})</p>
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
      {!showCards && <Message message="Click on arrow icon to show tickets" />}
    </div>
  );
};

export default Board;
