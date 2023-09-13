import React from "react";

const Blog = ({ blogs }) => {
  console.log(blogs)
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => <div key={blog.id}> {blog.title} </div>)}
    </div>  
  )
}

export default Blog