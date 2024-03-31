//import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'my new react project';
  const like = 50;
  // const person = {name :'ali' ,age:20};


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { like } times</p>
        {/*<p>Liked { person } times</p>*/}
        <p>{ 10 }</p>
        <p>{ "hello,liverpool" }</p>
        <p>{["persepolis ", " liverpool ", 1, 2]}</p>
      </div>
    </div>
  );
}

export default App;
