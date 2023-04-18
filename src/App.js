import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Welcome from './Welcome';
import Snippet from './Snippet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Welcome name="Flavia"/>

<Snippet title="Nurse's house in home search relesed" 
timeAgo="2h" 
category="Liverpool"/>
<Snippet title="Fisherman rescued on island after days without food" 
timeAgo="1h" 
category="Australia"/>
<Snippet title="Kate Bush song in running for top award 3 years after release" 
timeAgo="4m" 
category="Entertainment & Arts"/>
       <Button/>
       <Button2/>
      </header>
    </div>
  );
}

export default App;
