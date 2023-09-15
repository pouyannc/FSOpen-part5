import { useState } from "react";
import Togglable from "./Togglable";

const Blog = ({ blog }) => {
  const [view, setView] = useState(false);

  const blogStyle = {
    padding: 5,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const toggleInfo = () => {
    setView(!view);
  }

  return (
    <div>
      <div style={blogStyle}>
        <div>
          {blog.title} <button onClick={toggleInfo}>{view ? 'close' : 'view'}</button>
        </div>
        <div style={{ display: view ? '' : 'none' }} >
          <a href={blog.url}>{blog.url}</a>
          <div>Likes: {blog.likes} <button>like</button></div>
          <div>{blog.author}</div>
        </div>
      </div>
    </div>  
  )
}

export default Blog