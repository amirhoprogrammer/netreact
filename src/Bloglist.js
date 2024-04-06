/*import { useState } from "react";*/
const Bloglist = ({ blogs,title }) => {
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
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;