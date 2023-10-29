import { useEffect } from "react";

import Header from "./components/Header/Header";
import BoardContainer from "./components/Board/BoardContainer";

function App() {
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <main>
      <Header />
      <BoardContainer />
    </main>
  );
}

export default App;
