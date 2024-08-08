import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "ButtonFace" }}>Left hand {name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h2 style={{ backgroundColor: "green" }}>Right hand {message}</h2>;
};
function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Developer" />
        <RightHandComponent message="good for u!" />
      </SplitScreen>
    </>
  );
}

export default App;
