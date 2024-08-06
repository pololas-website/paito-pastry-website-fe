import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../header/Header';

import './mainLayout.css';

function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
