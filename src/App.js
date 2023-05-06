import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Cookie from './Components/Cookie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cookie/>
        <img src={logo} className="App-logo" alt="logo" />
        <Button color= "color"  text ="Get Users"/>       
      </header>
    </div>
  );
}

export default App;
