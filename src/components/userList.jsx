import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="userList_container">
      <div className="flex align-center justify-between border-b-2 py-4 px-10 w-full ">
        <h2 className="text-xl font-bold">Agents</h2>
        <h3 className="text-l font-normal">Grid View</h3>
      </div>
      <ul className="grid grid-cols-4 w-4/5 gap-2 mt-10 mx-auto">
        {users.map((value) => {
          return (
            <li className="flex align-middle flex-col border-2 pt-5 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={value.photo} className="rounded-full border-black border-2" height="50px" width="50px"/>
                <div>
                  <h2 className="font-bold text-2xl capitalize">{value.name}</h2>
                  <h3 className="text-center capitalize">{value.profession}</h3>
                </div>
              </div>
              <div className="bg-slate-200 rounded-xl m-2 p-2 mt-4">
                <div className="flex align-middle justify-between border-black">
                  <h4>{value.city}</h4>
                  <h4>{value.dob}</h4>
                </div>
                <h4>{value.email}</h4>
                <h4>{value.phone}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default userList;
