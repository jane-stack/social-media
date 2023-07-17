import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import PostList from './components/PostList';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
