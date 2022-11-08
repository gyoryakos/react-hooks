import React, {useState} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Ákos");

  function increment() {
    setCounter(count => ++count);
  }

  let handleInput = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <>
      <div>
        {counter}
        <button onClick={increment }>Increment</button>
      </div>
      <div>
        <input placeholder='enter something...' onChange={handleInput}/>
        {inputValue}
      </div>
    </>
  );
}
