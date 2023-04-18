import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Button/>
       <Button2/>
      </header>
    </div>
  );
}

export default App;
