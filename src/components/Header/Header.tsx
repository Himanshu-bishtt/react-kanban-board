import { useEffect, useState } from "react";

import { BiSliderAlt, BiChevronDown } from "react-icons/bi";

import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { useFilter } from "../../hooks/UseFilter";

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(false);
  const { theme, grouping, ordering, onTheme, onGrouping, onOrdering } =
    useFilter();
  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);

  function handleTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    onTheme(event.target.value);
  }

  function handleGrouping(event: React.ChangeEvent<HTMLSelectElement>) {
    onGrouping(event.target.value);
  }

  function handleOrdering(event: React.ChangeEvent<HTMLSelectElement>) {
    onOrdering(event.target.value);
  }

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsDark(theme === "dark" ? true : false);
  }, [theme]);

  return (
    <header className={styles.header}>
      <img src={isDark ? logoDark : logo} alt="kanban board logo" />

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

        <div className={styles.popupItem}>
          <label htmlFor="theme">Theme</label>
          <select name="theme" id="theme" value={theme} onChange={handleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </header>
  );
}
