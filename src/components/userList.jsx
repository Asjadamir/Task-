import React, { useState } from "react";

const userList = () => {
  const [users, setusers] = useState([]);
  const fetchData = async () => {
    const url = "https://task-c0671-default-rtdb.firebaseio.com/form.json";
    const resp = await fetch(url);
    const api_data = await resp.json();
    const data = Object.values(api_data);
    setusers(data);
    console.log(users);
  };

  return (
    <div className="userList_container">
      <button className="fetchButton" onClick={fetchData}>
        Fetch Users
      </button>
      <ul className="userList">
        {users.map((value) => {
          return (
            <li className="user">
              <div className="main-info">
                <img src={value.photo} height="50px" width="50px" />
                <div>
                  <h2>{value.name}</h2>
                  <h3>{value.profession}</h3>
                </div>
              </div>
              <div className="other-info">
                <h4>{value.dob}</h4>
                <h4>{value.email}</h4>
                <h4>{value.phone}</h4>
                <h4>{value.city}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default userList;
