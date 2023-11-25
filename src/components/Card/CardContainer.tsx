import { Ticket } from "../../types";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

interface CardContainerProps {
  filteredItems: Ticket[] | undefined;
}

const CardContainer: React.FC<CardContainerProps> = ({ filteredItems }) => {
  return (
    <div className={styles.cardsContainer}>
      {filteredItems?.map((item) => (
        <Card key={item._id} ticket={item} />
      ))}
    </div>
  );
};

export default CardContainer;
