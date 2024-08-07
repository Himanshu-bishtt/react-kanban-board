import { useEffect } from "react";

import { useApp } from "./hooks/UseApp";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";
import AddTicket from "./components/AddTicket/AddTicket";
import UpdateTicket from "./components/UpdateTicket/UpdateTicket";

function App() {
  const { isLoading, updateTicketModal, getTickets, getUsers } = useApp();

  useEffect(() => {
    getTickets();
    getUsers();
  }, [getTickets, getUsers]);

  return (
    <Main>
      <Header />
      <p>
        Platform which hosted the backend API had a trial period which was
        ended! Please see the github repo
      </p>
      <BoardContainer />
      <AddTicket />
      {updateTicketModal && !isLoading && <UpdateTicket />}
    </Main>
  );
}

export default App;
