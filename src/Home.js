import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
               return res.json()
            })
            .then(data => {
                setBlogs(data);
            })
    } , [])

    return (
        <div className="home">
            {blogs!=null && <Bloglist blogs={blogs}/>}            
        </div>
    );
}
 
export default Home;