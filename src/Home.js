import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }
    

    useEffect(() => {
        /**/
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    //console.log(res);
                    if (!res.ok) {
                        throw Error('could not fetch the data');    
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(true);
                    setError(null);
                })
                .catch(err => {
                    //console.log(err.message);
                    setIsPending(false);
                    setError(err.message);
                }) 
                    
                
        }, 1000);
    } , [])

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs!=null && <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}            
        </div>
    );
}
 
export default Home;