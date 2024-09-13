import React, { useState, useCallback } from "react";
import { shuffleArray } from "../utils/helper";
import Search from "./Search";
//wrap your function and return new function that is memoize (freezing the function)
// when we are passing function as a props
const allUsers = [
  "John",
  "Horn",
  "corn",
  "Brown",
  "Rose",
  "Lily",
  "Sally",
  "Tom",
];

interface DemoProps {}
function Index({}: DemoProps) {
  const [filteredUsers, setFilteredUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(filteredUsers[0]);
      const filtered = allUsers.filter((user) =>
        user.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filtered);
    },
    [filteredUsers]
  );

  return (
    <div>
      <div className="align-center mb-2 flex">
        <button onClick={() => setFilteredUsers(shuffleArray(allUsers))}>
          Shuffle
        </button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {filteredUsers?.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
