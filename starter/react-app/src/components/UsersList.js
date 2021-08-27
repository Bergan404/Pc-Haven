import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { allCpuData } from '../store/cpu';

function UsersList() {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([]);
  const cpu = useSelector(state => state.cpu)

  useEffect(() => {
    dispatch(allCpuData())
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, [dispatch]);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
