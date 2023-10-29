import { User } from "../Board/BoardContainer";
import styles from "./Users.module.css";

interface UsersProps {
  users: User[];
}

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

const Users: React.FC<UsersProps> = ({ users }) => {
  const userInitials = users.map((user) => getInitials(user.name));

  return (
    <div className={styles.users}>
      {userInitials.map((user) => (
        <button key={user}>{user}</button>
      ))}
    </div>
  );
};

export default Users;
