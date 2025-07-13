import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Posts from './Posts';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
