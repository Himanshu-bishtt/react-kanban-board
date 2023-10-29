import { BiSignal3 } from "react-icons/bi";

import Card from "../Card/Card";
import styles from "./Board.module.css";

export default function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <span>
          <BiSignal3 />
        </span>
        <p>High 5</p>
      </div>
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
