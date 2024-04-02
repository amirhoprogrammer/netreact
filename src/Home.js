const Home = () => {

    const handleClick = () => {
        alert('hello','liverpool');
    }

    const handleClickAgain = (name) => {
        alert('hello '+ name);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('amirhossein')    
            }}>Click Me again</button>
        </div>
    );
}
 
export default Home;