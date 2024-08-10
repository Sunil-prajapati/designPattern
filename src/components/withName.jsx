const withCounter = (OldComponent) => {
  return function EnhancedFunction(props) {
    return <OldComponent {...props} name="WithName" />;
  };
};
export default withCounter;
