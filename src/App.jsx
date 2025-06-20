import { use, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Rate from "./components/Rate/Rate";
import Result from "./components/Result/Result";

function App() {
  const [number, setNumber] = useState(null);
  const [submit, setSubmit] = useState(false);

  return (
    <>
      {!submit && (
        <Rate number={number} setNumber={setNumber} setSubmit={setSubmit} />
      )}
      {submit && <Result number={number} />}
    </>
  );
}

export default App;
