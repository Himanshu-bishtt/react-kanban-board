import { useFilter } from "../../hooks/UseFilter";
import styles from "./BoardContainer.module.css";
import Board from "./Board";
import { useEffect } from "react";

export type Ticket = {
  id: string;
  priority: number;
  tag: string[];
  userId: string;
  status: string;
  title: string;
};

export type User = {
  id: string;
  name: string;
  available: boolean;
};

interface BoardContainerProps {}

const BoardContainer: React.FC<BoardContainerProps> = () => {
  const { grouping, itemsPerBoard, getBoards } = useFilter();

  useEffect(() => {
    getBoards(grouping);
  }, [getBoards, grouping]);

  return (
    <div className={styles.boardContainer}>
      {itemsPerBoard?.map((board, index: number) => (
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
