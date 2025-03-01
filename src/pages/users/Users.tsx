import { useEffect, useState } from 'react';

import './users.css';

import { getUsers } from '../../firebase';

function Users() {
  const [users, setUsers] = useState<client.IUser[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data ?? []);
    });
  }, []);

  return (
    <section className="users container">
      <h4 className="heading-4 users__title">
        Current users in the Lolita&apos;s Page!
      </h4>
      <ul className="users__list">
        {users.map(({ id, name, email }) => (
          <li key={id} className="users__user">
            <span className="users__full-name big-text--1">
              <i className="fa-solid fa-user"></i>
              {name}
            </span>
            <span className="users__email">{email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
