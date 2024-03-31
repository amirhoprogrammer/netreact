//import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'my new react project';
  const like = 50;
  // const person = {name :'ali' ,age:20};
  const link = "https://forooshmobile.ir/";


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { like } times</p>
        {/*<p>Liked { person } times</p>*/}
        <p>{ 10 }</p>
        <p>{ "hello,liverpool" }</p>
        <p>{["persepolis ", " liverpool ", 1, 2]}</p>
        <p>{Math.random() * 20}</p>
        
        <a href={link}>forooshmobile</a>
      </div>
    </div>
  );
}

export default App;
