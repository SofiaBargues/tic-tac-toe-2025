import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  function increase() {
    setValue(value + 1);
  }
  function decrease() 
  {
    setValue(value - 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <div>{value}</div>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
