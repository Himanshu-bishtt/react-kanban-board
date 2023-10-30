import { useApp } from "../../context/AppContext";
import styles from "./BoardContainer.module.css";
import Board from "./Board";
import { useFilter } from "../../context/FilterContext";

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
  const { grouping } = useFilter();

  console.log(grouping);

  let itemsPerBoard;

  if (grouping === "status") {
    const totalBoards = Array.from(
      new Set(tickets.map((el: Ticket) => el.status))
    );

    itemsPerBoard = totalBoards.map((board) => {
      return {
        status: board,
        items: tickets.filter((ticket: Ticket) => ticket.status === board),
      };
    });
  } else if (grouping === "user") {
    const totalBoards = Array.from(
      new Set(tickets.map((el: Ticket) => el.userId))
    );

    itemsPerBoard = totalBoards.map((board) => {
      return {
        status: board,
        items: tickets.filter((ticket: Ticket) => ticket.userId === board),
      };
    });
  } else if (grouping === "priority") {
    const totalBoards = Array.from(
      new Set(tickets.map((el: Ticket) => el.priority).sort((a, b) => b - a))
    );

    itemsPerBoard = totalBoards.map((board) => {
      return {
        status: board,
        items: tickets.filter((ticket: Ticket) => ticket.priority === board),
      };
    });
  }

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
