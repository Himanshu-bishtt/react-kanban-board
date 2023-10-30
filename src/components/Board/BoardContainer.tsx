import { useApp } from "../../context/AppContext";
import styles from "./BoardContainer.module.css";
import Board from "./Board";

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
  const { tickets, users } = useApp();
  const totalBoards = Array.from(
    new Set(tickets.map((el: Ticket) => el.status))
  );

  const itemsPerBoard = totalBoards.map((board) => {
    return {
      status: board,
      items: tickets.filter((ticket: Ticket) => ticket.status === board),
    };
  });

  return (
    <div className={styles.boardContainer}>
      {itemsPerBoard?.map((board, index: number) => (
        <Board
          key={`board-item-${index}`}
          name={board.status}
          items={board.items}
          users={users}
        />
      ))}
    </div>
  );
};

export default BoardContainer;
