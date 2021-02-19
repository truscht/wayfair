import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.wayfair.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wayfair
        </a>
      </header>
    </div>
  );
}

export default App;
