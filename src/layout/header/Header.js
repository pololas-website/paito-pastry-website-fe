import { Link } from 'react-router-dom';

import { Button, Input } from '../../components';

import Logo from '../../../public/img/logo.png';
import './header.css';

function Header() {
  return (
    <header className="main-header">
      <nav>
        <div className="header__main-nav">
          <div className="header__main-nav--left">
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
          <div className="header__main-nav--right">
            <Input
              className="header__search"
              placeholder="Search"
              type="search"
              autoComplete="off"
            >
              <Button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Input>
            <Button className="header__buy" rounded>
              <i className="fa-solid fa-cart-shopping"></i>
            </Button>
          </div>
        </div>
        <ul className="header__secondary-nav">
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
        <div className="header__deliver-nav">
          <label htmlFor="deliver-input" className="header__label">
            What Can Be Delivered To Me?
          </label>
          <Input
            id="deliver-input"
            type="text"
            placeholder="Enter postcode"
            small
          />
          <Button className="header__btn" small contrast>
            Find
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
