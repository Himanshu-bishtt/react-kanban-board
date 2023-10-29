import Board from "./Board";
import styles from "./BoardContainer.module.css";

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

interface BoardContainerProps {
  tickets: Ticket[];
  users: User[];
}

const BoardContainer: React.FC<BoardContainerProps> = ({ tickets, users }) => {
  const totalBoards = Array.from(new Set(tickets.map((el) => el.status)));

  const itemsPerBoard = totalBoards.map((board) => {
    return {
      status: board,
      items: tickets.filter((ticket) => ticket.status === board),
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
