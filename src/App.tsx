import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

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
      <BoardContainer tickets={tickets} users={users} />
    </main>
  );
}

export default App;
