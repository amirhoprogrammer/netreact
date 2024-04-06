import { useState } from "react";
const Home = () => {
    //let name = 'amin';
    const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'lorem..', author: 'amir', id: 1 },
        { title: 'welcome bro', body: 'lorem..', author: 'ali', id: 2 },
        { title: 'hey gange', body: 'lorem..', author: 'armin', id: 3 },
    ]);
    const [name, setName] = useState('ali');
    const handleClick1 = () => {
        setName('osanloo')
    };

    /*const handleClick = () => {
        alert('hello', 'liverpool');
    }*/

    const handleClickAgain = (name) => {
        alert('hello ' + name);
    };
    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick1}>Click</button>
            {/*<button onClick={handleClick}>Click Me</div></button>*/}
            <button onClick={() => {
                handleClickAgain('amirhossein')    
            }}>Click Me again</button>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;