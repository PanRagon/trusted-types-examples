import logo from './logo.svg';
import './App.css';
import { Reviews } from './components/Reviews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my review site!</h1>
      </header>
      <Reviews />
    </div>
  );
}

export default App;
