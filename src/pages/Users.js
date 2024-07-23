import MainLayout from '../layout/MainLayout';

function Users() {
  return (
    <MainLayout>
      <section className="users container">
        <h4 className="heading-4 users__title">
          Current users in the Lolita&apos;s Page!
        </h4>
        <ul className="users__list">
          <li className="users__user">
            <span className="users__full-name big-text--1">
              <i className="fa-solid fa-user"></i>
              Veymar Montano Colque
            </span>
            <span className="users__email">veymar.montano@gmail.com</span>
          </li>
          <li className="users__user">
            <span className="users__full-name big-text--1">
              <i className="fa-solid fa-user"></i>
              Veymar Montano Colque
            </span>
            <span className="users__email">veymar.montano@gmail.com</span>
          </li>
          <li className="users__user">
            <span className="users__full-name big-text--1">
              <i className="fa-solid fa-user"></i>
              Veymar Montano Colque
            </span>
            <span className="users__email">veymar.montano@gmail.com</span>
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default Users;
