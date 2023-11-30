import styles from "./AddTicket.module.css";
import { BiPlus } from "react-icons/bi";

const AddTicket = () => {
  function handleAddTicket() {
    alert("Add Ticket");
  }

  return (
    <button className={styles.addTicket} onClick={handleAddTicket}>
      <BiPlus />
    </button>
  );
};

export default AddTicket;
