import { useEffect } from "react";

import { useApp } from "./hooks/UseApp";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";
import AddTicket from "./components/AddTicket/AddTicket";

function App() {
  const { getData } = useApp();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Main>
      <Header />
      <BoardContainer />
      <AddTicket />
    </Main>
  );
}

export default App;
