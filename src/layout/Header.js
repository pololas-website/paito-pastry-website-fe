import Logo from '../../public/img/logo.png';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="main-nav">
          <div className="main-nav--left">
            {/* This should be a sing in, after sign in,if no account sign up */}
            <a href="signup.html" className="btn">
              Sign up
            </a>
            <a href="#" className="btn">
              Stores
            </a>
            <a href="#" className="btn">
              Delivery
            </a>
            <a href="users.html" className="btn">
              Users
            </a>
          </div>
          <a href="/" className="header__logo btn">
            <img src={Logo} alt="logo" />
          </a>
          <div className="main-nav--right">
            <span className="input header__search">
              <input placeholder="Search" type="search" autoComplete="off" />
              <button className="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </span>
            <button className="btn header__buy">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        <ul className="secondary-nav">
          <li>
            <a href="#" className="header__link btn">
              What&apos;s New
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Cakes
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Cupcakes
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Wedding
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Free From
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Brownies
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Nationwide
            </a>
          </li>
          <li>
            <a href="#" className="header__link btn">
              Party Supplies
            </a>
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
          <button className="btn btn--s btn--contrast deliver__btn">
            Find
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
