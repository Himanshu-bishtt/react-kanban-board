import Board from "./Board";
import styles from "./BoardContainer.module.css";

export default function BoardContainer() {
  return (
    <div className={styles.boardContainer}>
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  );
}
