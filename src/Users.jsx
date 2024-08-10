const Users = (props) => {
  const user = {
    name: props?.name,
    age: 30,
    email: "john.doe@example.com",
  };
  return (
    <div>
      <p>Name:{user?.name}</p>
      <p>Name:{user?.age}</p>
      <p>Name:{user?.email}</p>
    </div>
  );
};

export default Users;
