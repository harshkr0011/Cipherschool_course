import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchDashboard = () => {
    fetch('http://localhost:5000/dashboard', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error === 'Token expired') {
          setError('Token expired');
          navigate('/login');
        } else {
          console.log(data);
        }
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={fetchDashboard}>Access Dashboard</button>
      <button onClick={logout}>Logout</button>
      <p>{error}</p>
    </div>
  );
}
export default App;
