import { BiSignal3, BiPlus, BiDotsHorizontalRounded } from "react-icons/bi";

import Card from "../Card/Card";
import styles from "./Board.module.css";

export default function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <div className={styles.left}>
          <span>
            <BiSignal3 />
          </span>
          <div className={styles.boardInfo}>
            <p>High</p>
            <p>5</p>
          </div>
        </div>

        <div className={styles.right}>
          <button>
            <BiPlus />
          </button>
          <button>
            <BiDotsHorizontalRounded />
          </button>
        </div>
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
