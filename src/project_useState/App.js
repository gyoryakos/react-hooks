import React, {useState} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(count => ++count);
  }
  return (
    <div>
      {counter}
      <button onClick={increment }>Increment</button>
    </div>
  );
}
