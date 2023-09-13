const CreatePost = ({ handleSubmit, title, author, url, setTitle, setAuthor, setUrl }) => {
  return (
    <>
      <h2>Create New</h2>

      <form onSubmit={handleSubmit}>
        <div>Title: <input type="text" value={title} name="title" onChange={(e) => { setTitle(e.target.value) }}/></div>
        <div>Author: <input type="text" value={author} name="author" onChange={(e) => { setAuthor(e.target.value) }}/></div>
        <div>url: <input type="text" value={url} name="url" onChange={(e) => { setUrl(e.target.value) }}/></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default CreatePost;