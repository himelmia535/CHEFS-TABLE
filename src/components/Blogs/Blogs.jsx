import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-3/5">
            <h2 className="text-4xl">Recipes: {blogs.length} </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;