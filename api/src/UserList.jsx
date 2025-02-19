import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
