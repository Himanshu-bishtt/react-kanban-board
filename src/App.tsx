import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import BoardContainer, {
  Ticket,
  User,
} from "./components/Board/BoardContainer";
import Users from "./components/Users/Users";

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await res.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <main>
      <Header />
      <Users users={users} />
      <BoardContainer tickets={tickets} users={users} />
    </main>
  );
}

export default App;
