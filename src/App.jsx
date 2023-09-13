import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginRes = await loginService({ username, password });
    console.log(loginRes)
    setUser(loginRes);
    window.localStorage.setItem('loggedUser', JSON.stringify(loginRes));
    setUsername('');
    setPassword('');
  }

  const handleLogout = (e) => {
    window.localStorage.clear();
    setUser(null);
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs);
    }

    fetchBlogs();

    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
    if (loggedUser) setUser(loggedUser);
  }, [])

  return (
    !user
      ? <Login username={username} password={password} handleSubmit={handleLoginSubmit} setPassword={setPassword} setUsername={setUsername} />
      : <div>
          <div>logged in as {user.username} <button onClick={handleLogout}>logout</button></div>
          <Blog blogs={blogs} />
        </div>
  )
}

export default App