import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(10);
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setcount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);
  return (
    <div className="bg-slate-900 h-20 flex justify-center items-center text-white">
      {count > 0 ? (
        <div className="text-7xl">Counter: {count}</div>
      ) : (
        <div className="text-7xl text-yellow-500 shadow-amber-300">
          Happy Birthday🥳🎈😘✌️
        </div>
      )}
    </div>
  );
};
export default Counter;
