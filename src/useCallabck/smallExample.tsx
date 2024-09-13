import React, { useState, useCallback } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

// Button component with React.memo for performance optimization
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = React.memo(({ onClick, children }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>{children}</button>;
});

export default Counter;
