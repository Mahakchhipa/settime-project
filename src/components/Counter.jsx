import React, { useEffect, useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(10);
  useEffect(() => {
    if (Count > 0) {
      const timer = setTimeout(() => {
        setCount(Count - 1);
      }, 1000);
    }
  }, [Count]);
  return (
    <div className="text-center text-4xl p-8 content-center font-bold text-blue-600">
      <div> Counter {Count}</div>
    </div>
  );
};

export default Counter;
