import logo from './img/wayfair-partner-home-logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
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
      <section className="main">
        <p>
          Lots of paragraphs<br />
          to simulate sticky header.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
        <p>
          Lorem ipsum <br />
          dolor sit amet.
        </p>
      </section>
    </div>
  );
}

export default App;
