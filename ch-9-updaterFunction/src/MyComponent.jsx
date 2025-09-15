import { useState } from 'react';

const MyComponent = () => {
  const [count, setCOunt] = useState(0);

  function increment() {
    // setCOunt(count + 1);
    // setCOunt(count + 3);
    // setCOunt(count + 2); //! React Batching issue : it only updates +2 cause its in last and it overrides all of them , as well count variable is constand inside a comopnent render  so new count value cant be access by normal ways : )

    setCOunt((prev) => prev + 1);
  }
  function decrement() {
    // setCOunt(count - 1);
    setCOunt((prev) => prev - 1);
  }
  function reset() {
    setCOunt(0);
  }
  return (
    <>
      <div className='count'>Count : {count}</div>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
};
export default MyComponent;
