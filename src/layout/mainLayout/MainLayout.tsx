import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../header/Header';

import styles from './mainLayout.module.css';

function MainLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
