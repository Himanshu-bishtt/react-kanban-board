import { useEffect } from "react";

import { useApp } from "./context/AppContext";
import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";
import Main from "./components/Main/Main";

function App() {
  const { getData } = useApp();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Main>
      <Header />
      <BoardContainer />
    </Main>
  );
}

export default App;
