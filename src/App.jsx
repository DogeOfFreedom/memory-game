import Header from "./Header";
import NationSelect from "./TypeSelect";
import "./App.css";
import { useState } from "react";
import MemoryGame from "./MemoryGame";

function App() {
  const [type, setType] = useState("");

  return (
    <>
      <Header />
      {type === "" ? (
        <NationSelect chooseType={setType} />
      ) : (
        <MemoryGame type={type} />
      )}
      {/* <MemoryGame nation="Mondstat" /> */}
    </>
  );
}

export default App;
