/*import { useState } from "react";*/
const Bloglist = (props) => {
    const blogs = props.blogs;
    console.log(props, blogs);
    /*const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'lorem..', author: 'amir', id: 1 },
        { title: 'welcome bro', body: 'lorem..', author: 'ali', id: 2 },
        { title: 'hey gange', body: 'lorem..', author: 'armin', id: 3 },
    ]);*/
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;