import logo from './wayfair-partner-home-logo.png';
import iconUser from './icon-user.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="logo" href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <button className="user-nav" title="User"></button>
      </header>
    </div>
  );
}

export default App;
