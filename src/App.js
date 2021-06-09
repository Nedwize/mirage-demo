import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users/').then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  const addUser = () => {
    axios
      .post(`/api/users/`, {
        name: 'Nakshatra',
        email: 'nakshatra@gmail.com',
        phone: 54678907687,
      })
      .then((res) => {
        console.log(res);
        setUsers([...users, res.data.user]);
      });
  };

  return (
    <table>
      <button onClick={addUser}>Click</button>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, phone, id }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
