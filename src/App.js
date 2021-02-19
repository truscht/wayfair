import logo from './wayfair-partner-home-logo.png';
import iconUser from './icon-user.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a className="logo" href="/">
          <img src={logo} className="App-logo" alt="logo" />
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
      <div>Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br />Test<br /></div>
    </div>
  );
}

export default App;
