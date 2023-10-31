import styles from "./Message.module.css";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Message;
