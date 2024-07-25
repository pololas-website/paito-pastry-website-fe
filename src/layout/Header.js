import { Link } from 'react-router-dom';

import Button from '../components/button/Button';

import Logo from '../../public/img/logo.png';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="main-nav">
          <div className="main-nav--left">
            {/* This should be a sing in, after sign in,if no account sign up */}
            <Button as={Link} to="/signup" className="header__link" small>
              Sign up
            </Button>
            <Button as={Link} to="/" className="header__link">
              Stores
            </Button>
            <Button as={Link} to="/" className="header__link">
              Delivery
            </Button>
            <Button as={Link} to="/users" className="header__link">
              Users
            </Button>
          </div>
          <Button as={Link} to="/" className="header__logo">
            <img src={Logo} alt="logo" />
          </Button>
          <div className="main-nav--right">
            <span className="input header__search">
              <input placeholder="Search" type="search" autoComplete="off" />
              <Button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </span>
            <Button className="header__buy">
              <i className="fa-solid fa-cart-shopping"></i>
            </Button>
          </div>
        </div>
        <ul className="secondary-nav">
          <li>
            <Button as={Link} to="/" className="header__link">
              What&apos;s New
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Cakes
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Cupcakes
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Wedding
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Free From
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Brownies
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Nationwide
            </Button>
          </li>
          <li>
            <Button as={Link} to="/" className="header__link">
              Party Supplies
            </Button>
          </li>
        </ul>
        <div className="deliver-nav">
          <label htmlFor="deliver-input" className="deliver-nav__label">
            What Can Be Delivered To Me?
          </label>
          <span className="input input--s">
            <input
              id="deliver-input"
              type="text"
              placeholder="Enter postcode"
            />
          </span>
          <Button className="deliver__btn" small contrast>
            Find
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
