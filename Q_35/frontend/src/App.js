import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'alice@example.com', password: 'password123' })
    })
      .then(res => res.json())
      .then(data => localStorage.setItem('token', data.token));
  }, []);
  return <div>Check console for token</div>;
}
export default App;
