import Card from "../Card/Card";
import styles from "./Board.module.css";

export default function Board() {
  return (
    <div className={styles.board}>
      <h1>Board name</h1>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
