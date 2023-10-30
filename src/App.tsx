import { useEffect } from "react";

import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";
import Users from "./components/Users/Users";
import Main from "./components/Main/Main";
import { useApp } from "./context/AppContext";

function App() {
  const { tickets, users, getData } = useApp();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Main>
      <Header />
      <Users users={users} />
      <BoardContainer tickets={tickets} users={users} />
    </Main>
  );
}

export default App;
