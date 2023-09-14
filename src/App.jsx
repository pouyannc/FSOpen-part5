import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import loginService from './services/login'
import CreatePost from './components/CreatePost'
import Alert from './components/Alert'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [showAlert, setShowAlert] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try{
      const loginRes = await loginService({ username, password });
      blogService.setToken(loginRes.token);
      setUser(loginRes);
      window.localStorage.setItem('loggedUser', JSON.stringify(loginRes));
      setUsername('');
      setPassword('');
    } catch(error) {
      setShowAlert('wrong username or password');

      setTimeout(() => {
        setShowAlert(null);
      }, 4000);
    }

    
  }

  const handleLogout = (e) => {
    window.localStorage.clear();
    setUser(null);
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(`creating post`)

    const req = { title, author, url };

    const res = await blogService.create(req);
    setBlogs(blogs.concat(res));
    setShowAlert(`New entry created: ${res.title}`);

    setTimeout(() => {
      setShowAlert(null);
    }, 4000);
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      const allBlogs = await blogService.getAll();
      setBlogs(allBlogs);
    }

    fetchBlogs();

    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
    if (loggedUser) {
      setUser(loggedUser);
      blogService.setToken(loggedUser.token);
    }
  }, [])

  return (
    <>
      {showAlert && <Alert text={showAlert} />}

      {!user
      ? <Login username={username} password={password} handleSubmit={handleLoginSubmit} setPassword={setPassword} setUsername={setUsername} />
      : <div>
          <div>logged in as {user.username} <button onClick={handleLogout}>logout</button></div>
          <CreatePost handleSubmit={handleCreate} title={title} author={author} url={url} setTitle={setTitle} setAuthor={setAuthor} setUrl={setUrl} />
          <Blog blogs={blogs} />
        </div>}
    </>
    

    
  )
}

export default App