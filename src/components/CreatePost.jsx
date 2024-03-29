import React, { useState } from 'react';

const CreatePost = ({ createNew }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();

    const req = { title, author, url };

    createNew(req);
  };

  return (
    <>
      <h2>Create New</h2>

      <form onSubmit={handleCreate}>
        <div>Title: <input id="title" type="text" value={title} name="title" onChange={(e) => { setTitle(e.target.value); }} /></div>
        <div>Author: <input id="author" type="text" value={author} name="author" onChange={(e) => { setAuthor(e.target.value); }} /></div>
        <div>url: <input id="url" type="text" value={url} name="url" onChange={(e) => { setUrl(e.target.value); }} /></div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default CreatePost;
