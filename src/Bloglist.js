/*import { useState } from "react";*/
const Bloglist = ({ blogs,title,handleDelete }) => {
    /*const blogs = props.blogs;
    const title = props.title;*/
    /*console.log(props, blogs);*/
    /*const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'lorem..', author: 'amir', id: 1 },
        { title: 'welcome bro', body: 'lorem..', author: 'ali', id: 2 },
        { title: 'hey gange', body: 'lorem..', author: 'armin', id: 3 },
    ]);*/
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blogs</button>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;