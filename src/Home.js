import { useState } from "react";
const Home = () => {
    //let name = 'amin';
    const [name , setName] = useState('ali');
    const handleClick1 = () => {
        setName('osanloo')
    }

    const handleClick = () => {
        alert('hello','liverpool');
    }

    const handleClickAgain = (name) => {
        alert('hello '+ name);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick1}>Click</button>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('amirhossein')    
            }}>Click Me again</button>
        </div>
    );
}
 
export default Home;