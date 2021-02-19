import logo from './img/wayfair-partner-home-logo.png';

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        <img src={logo} className="logo__img" alt="Wayfair Partner Home" />
      </a>
      <div className="user-nav">
        <button className="user-nav__icon user-nav__icon--logged-in" title="User"><span className="user-nav__name chevron">My Username</span></button>
        <ul className="user-nav__items">
          <li className="user-nav__item"><a href="#" className="user-nav__link">Account settings</a></li>
          <li className="user-nav__item"><a href="#" className="user-nav__link">User management</a></li>
          <li className="user-nav__item"><a href="#" className="user-nav__link">My team</a></li>
          <li className="user-nav__item"><a href="#" className="user-nav__link">English (UK)</a></li>
          <li className="user-nav__item"><a href="#" className="user-nav__link">Logout</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
