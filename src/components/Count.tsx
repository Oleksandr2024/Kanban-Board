import React, { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Count = ({ setCount, children }: CounterProps) => {
  return (
    <div>
      <h2>{children}</h2>
      <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev: number) => prev - 1)}>-</button>
    </div>
  );
};

export default Count;
