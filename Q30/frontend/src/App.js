import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(() => setSuccess('Message sent!'));
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit">Send</button>
      </form>
      <p>{success}</p>
    </div>
  );
}
export default App;
