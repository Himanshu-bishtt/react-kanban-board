import { useApp } from "../../context/AppContext";
import { User } from "../Board/BoardContainer";
import styles from "./Users.module.css";

function getInitials(name: string) {
  const words = name.split(" ");
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }
  return initials;
}

const Users = () => {
  const { users } = useApp();
  const userInitials = users.map((user: User) => getInitials(user.name));

  return (
    <div className={styles.users}>
      {userInitials.map((user: string) => (
        <button key={user}>{user}</button>
      ))}
    </div>
  );
};

export default Users;
