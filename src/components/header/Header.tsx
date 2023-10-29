import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <select>
        <option>Display</option>
        <option>User</option>
        <option>Priority</option>
      </select>
    </header>
  );
}
