import { useState } from "react";
const withCounter = (OldComponent, incrementBy) => {
  return function EnhancedFunction(props) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        incrementCount={() => setCount(count + incrementBy)}
        name="collision problem of same prop name in hoc "
      />
    );
  };
};
export default withCounter;
