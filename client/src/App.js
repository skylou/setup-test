import "./App.css";
import { useState } from "react";
import Test from "./Test";
import TestForm from "./TestForm";

function App() {
  const [nodes, setNodes] = useState([
    { name: "example1", id: 1 },
    { name: "example2", id: 2 },
    { name: "example3", id: 3 },
  ]);

  const onSubmit = ({ param1, param2 }) => {
    console.log("Implement API call here");
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <TestForm onSubmit={onSubmit} />
      <Test nodes={nodes} />
    </div>
  );
}

export default App;
