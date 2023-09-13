import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

let token;

const setToken = (t) => {
  token =  `Bearer ${t}`;
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data;
}

const create = async (req) => {
  const res = await axios.post(baseUrl, req, { headers: { Authorization: token } });
  return res.data;
}

export default { getAll, create, setToken }