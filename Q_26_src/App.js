import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setFormData({
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something"
      />
      <p>Current Input: {inputText}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" /><br />
        <input type="email" name="email" placeholder="Email" /><br />
        <input type="password" name="password" placeholder="Password" /><br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
    </div>
  );
}
export default App;
