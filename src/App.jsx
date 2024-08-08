import ListLayout from "./ListLayout";
import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name, children }) => {
  return (
    <>
      <h1 style={{ backgroundColor: "ButtonFace" }}>Left hand {name}</h1>
      {children}
    </>
  );
};

const RightHandComponent = ({ message }) => {
  return <h2 style={{ backgroundColor: "green" }}>Right hand {message}</h2>;
};
function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <LeftHandComponent name="Developer">{<ListLayout />}</LeftHandComponent>
        <RightHandComponent message="good for u!" />
      </SplitScreen>
    </>
  );
}

export default App;
