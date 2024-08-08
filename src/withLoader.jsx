import { useState } from "react";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return (
      <div>{loading ? <p>loading ..</p> : <WrappedComponent {...props} />}</div>
    );
  };
};

export default withLoader;
