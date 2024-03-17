import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleWantToCook}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-3/5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleWantToCook={handleWantToCook}></Blog>)
            }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleWantToCook:PropTypes.func
}

export default Blogs;