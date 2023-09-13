import React from "react";

const Blog = ({ blogs }) => {
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => <div key={blog.id}> {blog.title} | By: {blog.author} </div>)}
    </div>  
  )
}

export default Blog