import { useEffect } from "react";

import { useFilter } from "../../hooks/UseFilter";
import Board from "./Board";
import styles from "./BoardContainer.module.css";

interface BoardContainerProps {}

const BoardContainer: React.FC<BoardContainerProps> = () => {
  const { grouping, totalBoards, getBoards } = useFilter();

  useEffect(() => {
    getBoards(grouping);
  }, [getBoards, grouping]);

  return (
    <div className={styles.boardContainer}>
      {totalBoards?.map((board, index: number) => (
        <Board
          key={`board-item-${index}`}
          name={board.status}
          items={board.items}
        />
      ))}
    </div>
  );
};

export default BoardContainer;
