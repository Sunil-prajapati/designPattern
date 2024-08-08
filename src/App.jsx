import Users from "./Users";
import withLoader from "./withLoader";

const UserWithLoader = withLoader(Users);

function App() {
  return (
    <>
      <h1> HOC: THAT RETURN ANOTHER COMPONENT</h1>
      <h2>Sharing behavior between components</h2>
      <h2>Adding extra functionality to the existing component </h2>
      <UserWithLoader />
    </>
  );
}

export default App;
