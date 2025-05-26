import React from "react";
import Counter from "./components/Counter";
import TypingTest from "./components/TypingTest";

const App = () => {
  return (
    <div>
      <h1 className="text-center  font-bold p-5 text-blue-500 bg-yellow-200">
        
        Mahak Counter Project In React
        <Counter/>
        <TypingTest/>
      </h1>
    </div>
  );
};

export default App;
