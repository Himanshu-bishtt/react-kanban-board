import { BiSliderAlt, BiChevronDown } from "react-icons/bi";
import { useState } from "react";

import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useApp } from "../../context/AppContext";

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(false);

  const { grouping, ordering, setGrouping, setOrdering } = useApp();

  function handleGrouping(event: React.ChangeEvent<HTMLSelectElement>) {
    setGrouping(event.target.value);
  }

  function handleOrdering(event: React.ChangeEvent<HTMLSelectElement>) {
    setOrdering(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="kanban board logo" />

      <button
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
      </button>
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
          <select
            name="grouping"
            id="grouping"
            value={grouping}
            onChange={handleGrouping}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <div className={styles.popupItem}>
          <label htmlFor="ordering">Ordering</label>
          <select
            name="ordering"
            id="ordering"
            value={ordering}
            onChange={handleOrdering}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </header>
  );
}
