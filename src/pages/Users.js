import { useEffect, useState } from 'react';

import MainLayout from '../layout/MainLayout';
import { usersApi } from '../api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersApi.getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <MainLayout>
      <section className="users container">
        <h4 className="heading-4 users__title">
          Current users in the Lolita&apos;s Page!
        </h4>
        <ul className="users__list">
          {users.map((user) => (
            <li key={user.name} className="users__user">
              <span className="users__full-name big-text--1">
                <i className="fa-solid fa-user"></i>
                {user.name}
              </span>
              <span className="users__email">{user.email}</span>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}

export default Users;
