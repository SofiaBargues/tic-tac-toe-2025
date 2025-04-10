import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(type) {
    type === "increase" ? setCount(count + 1) : setCount(count - 1);
  }
  return (
    <>
      <button onClick={() => handleClick("increase")}>Increase</button>
      <div>{count}</div>
      <button onClick={() => handleClick("decrease")}>Decrease</button>
    </>
  );
}
