import { useEffect } from "react";

import { useApp } from "./context/AppContext";
import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";
import Users from "./components/Users/Users";
import Main from "./components/Main/Main";

function App() {
  const { getData } = useApp();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Main>
      <Header />
      <Users />
      <BoardContainer />
    </Main>
  );
}

export default App;
