import { useEffect, useState } from "react";

import { BiSliderAlt, BiChevronDown } from "react-icons/bi";

import { useFilter } from "../../hooks/UseFilter";
import Select from "../UI/Select";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import styles from "./Header.module.css";
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

  function handlePopup() {
    setPopupOpen((prev) => !prev);
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

  const popupStyles: { opacity: number; visibility: string & any } = popupOpen
    ? { opacity: 1, visibility: "visible" }
    : { opacity: 0, visibility: "hidden" };

  return (
    <header className={styles.header}>
      <img src={isDark ? logoDark : logo} alt="kanban board logo" />

      <button className={styles.select} onClick={handlePopup}>
        <BiSliderAlt />
        <div className={styles.content}>
          <p>Settings</p>
          <BiChevronDown />
        </div>
      </button>

      <div className={styles.popup} style={popupStyles}>
        <Select
          title="Grouping"
          name={GROUPING.NAME}
          selectedValue={grouping}
          onChange={handleGrouping}
          options={GROUPING_OPTIONS}
        />

        <Select
          title="Ordering"
          name={ORDERING.NAME}
          selectedValue={ordering}
          onChange={handleOrdering}
          options={ORDERING_OPTIONS}
        />

        <Select
          title="Theme"
          name={THEME.NAME}
          selectedValue={theme}
          onChange={handleTheme}
          options={THEME_OPTIONS}
        />
      </div>
    </header>
  );
}
