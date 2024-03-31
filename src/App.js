//import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'my new react project';
  const like = 50;


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { like } times</p>
      </div>
    </div>
  );
}

export default App;
