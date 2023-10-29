import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";

import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p>CAM-11</p>
        <img src="https://i.pravatar.cc/24?u=118836" alt="user image" />
      </div>
      <p className={styles.title}>Conduct Security Vulnerability Assessment</p>
      <div className={styles.content}>
        <span>
          <IoWarningOutline />
        </span>
        <div>
          <AiOutlineCheckCircle />
          <p>Feature Request</p>
        </div>
      </div>
    </div>
  );
}
