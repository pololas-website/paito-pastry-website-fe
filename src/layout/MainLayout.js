import Footer from './Footer';
import Header from './header/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
