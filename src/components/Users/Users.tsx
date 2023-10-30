import { useApp } from "../../context/AppContext";
import { getInitials } from "../../helpers";
import { User } from "../Board/BoardContainer";
import styles from "./Users.module.css";

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
