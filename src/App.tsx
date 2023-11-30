import { useEffect } from "react";

import { useApp } from "./hooks/UseApp";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";
import AddTicket from "./components/AddTicket/AddTicket";

function App() {
  const { getTickets, getUsers } = useApp();

  useEffect(() => {
    getTickets();
    getUsers();
  }, [getTickets, getUsers]);

  return (
    <Main>
      <Header />
      <BoardContainer />
      <AddTicket />
    </Main>
  );
}

export default App;
