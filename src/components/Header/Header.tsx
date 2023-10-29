import { BiSliderAlt, BiChevronDown } from "react-icons/bi";

import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div
        className={styles.select}
        onClick={() => setPopupOpen((prev) => !prev)}
      >
        <span>
          <BiSliderAlt />
        </span>
        <div className={styles.content}>
          <p>Settings</p>
          <span>
            <BiChevronDown />
          </span>
        </div>
      </div>

      <div
        className={styles.popup}
        style={
          popupOpen
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        <div className={styles.popupItem}>
          <label htmlFor="grouping">Grouping</label>
          <select name="grouping">
            <option>Status</option>
            <option>Status</option>
            <option>Status</option>
          </select>
        </div>

        <div className={styles.popupItem}>
          <label htmlFor="ordering">Ordering</label>
          <select name="ordering">
            <option>Priority</option>
            <option>Priority</option>
            <option>Priority</option>
          </select>
        </div>
      </div>
    </header>
  );
}
