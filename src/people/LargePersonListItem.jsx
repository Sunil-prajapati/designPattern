const LargePersonListItem = ({ person }) => {
  const { name, age, email, hobbies } = person;
  return (
    <>
      <h3>{name}</h3>
      <p>Age:{age} years</p>
      <p>Email:{email}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies?.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </>
  );
};

export default LargePersonListItem;
