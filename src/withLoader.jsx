import { useState } from "react";

const withLoader = (WrappedComponent, name) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return (
      <div>
        {loading ? (
          <p>loading ..</p>
        ) : (
          <WrappedComponent {...props} name={name} />
        )}
      </div>
    );
  };
};

export default withLoader;
