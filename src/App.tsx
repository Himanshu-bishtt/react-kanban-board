import { useEffect } from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

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
      <Board />
    </main>
  );
}

export default App;
