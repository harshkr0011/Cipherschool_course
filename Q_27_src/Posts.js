import { useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    const data = await response.json();
    setPosts([...posts, ...data]);
    setPage(page + 1);
  };

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={fetchPosts}>Fetch More Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Posts;
