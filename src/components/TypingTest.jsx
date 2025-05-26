import React, { useEffect, useState } from "react";

const TypingTest = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isrunning, setrunning] = useState(false);
  const [text, setText] = useState("");
  const [wpm, setwpm] = useState(0);
  useEffect(() => {
    let timer;
    if (isrunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isrunning) {
      const words = text.trim().split(/\s+/).filter(Boolean);
      console.log(words);
      setwpm(words.length);
      setrunning(false);
      setText("");
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isrunning]);
  const StartTest = () => {
    setText("");
    setTimeLeft(10);
    setrunning(true);
  };
  return (
    <div className="bg-slate-900 text-white h-screen flex  justify-center items-center">
      <div className="bg-slate-600 w-80 h-80 p-8 text-center">
        <h2 className="text-3xl mb-5">Typing Test</h2>
        <p className="mb-5">Time Left: {timeLeft}s</p>
        <textarea
          cols="5"
          rows="3"
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing........."
          disabled={!isrunning}
          value={text}
          className="bg-blue-100 text-black w-50 mb-5"
        />
        <div className="bg-green-500 p-3 rounded-full">
          <button onClick={StartTest}>Start</button>
        </div>
        {timeLeft === 0 && <p>Your WPM: {wpm}</p>}
      </div>
    </div>
  );
};

export default TypingTest;
