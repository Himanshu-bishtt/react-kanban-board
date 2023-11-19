import { useEffect } from "react";

import { useApp } from "./hooks/UseApp";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";

function App() {
  const { getData } = useApp();

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

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
