import { useEffect, useState } from "react";

import { BiSliderAlt, BiChevronDown } from "react-icons/bi";

import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { useFilter } from "../../hooks/UseFilter";
import {
  GROUPING,
  GROUPING_OPTIONS,
  ORDERING,
  ORDERING_OPTIONS,
  THEME,
  THEME_OPTIONS,
} from "../../constants";

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(false);
  const { theme, grouping, ordering, onTheme, onGrouping, onOrdering } =
    useFilter();
  const [isDark, setIsDark] = useState(theme === THEME.DARK ? true : false);

  function handleTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    onTheme(event.target.value);
    setPopupOpen(false);
  }

  function handleGrouping(event: React.ChangeEvent<HTMLSelectElement>) {
    onGrouping(event.target.value);
    setPopupOpen(false);
  }

  function handleOrdering(event: React.ChangeEvent<HTMLSelectElement>) {
    onOrdering(event.target.value);
    setPopupOpen(false);
  }

  useEffect(() => {
    document.documentElement.setAttribute(THEME.NAME, theme);
  }, [theme]);

  useEffect(() => {
    setIsDark(theme === THEME.DARK ? true : false);
  }, [theme]);

  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (e.code === "Escape") setPopupOpen(false);
    }
    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, []);

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
          <label htmlFor={GROUPING.NAME}>Grouping</label>
          <select
            name={GROUPING.NAME}
            id={GROUPING.NAME}
            value={grouping}
            onChange={handleGrouping}
          >
            {GROUPING_OPTIONS.map((option) => (
              <option
                key={`grouping-option-item-${option.id}`}
                value={option.value}
              >
                {option.content}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.popupItem}>
          <label htmlFor={ORDERING.NAME}>Ordering</label>
          <select
            name={ORDERING.NAME}
            id={ORDERING.NAME}
            value={ordering}
            onChange={handleOrdering}
          >
            {ORDERING_OPTIONS.map((option) => (
              <option
                key={`ordering-option-item-${option.id}`}
                value={option.value}
              >
                {option.content}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.popupItem}>
          <label htmlFor={THEME.NAME}>Theme</label>
          <select
            name={THEME.NAME}
            id={THEME.NAME}
            value={theme}
            onChange={handleTheme}
          >
            {THEME_OPTIONS.map((option) => (
              <option
                key={`theme-option-item-${option.id}`}
                value={option.value}
              >
                {option.content}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
