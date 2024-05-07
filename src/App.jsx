import Header from "./Header";
import TypeSelect from "./TypeSelect";
import "./App.css";
import { useState } from "react";
import MemoryGame from "./MemoryGame";

function App() {
  const [type, setType] = useState("");

  const reset = () => {
    setType("");
  };

  return (
    <>
      <Header />
      {type === "" ? (
        <TypeSelect chooseType={setType} />
      ) : (
        <MemoryGame reset={reset} type={type} />
      )}
    </>
  );
}

export default App;
