//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  //const title = 'my new react project';
  //const like = 50;
  // const person = {name :'ali' ,age:20};
  const link = "https://forooshmobile.ir/";


  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
        {/*<p>Liked { like } times</p>*/}
        {/*<p>Liked { person } times</p>*/}
        {/*<p>{ 10 }</p>*/}
        {/*<p>{ "hello,liverpool" }</p>*/}
        {/*<p>{["persepolis ", " liverpool ", 1, 2]}</p>*/}
        <p>{Math.random() * 20}</p>
        
        <a href={link}>forooshmobile</a>
      </div>
    </div>
  );
}

export default App;
