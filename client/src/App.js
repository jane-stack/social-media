import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import LoginPage from './pages/LoginPage';
import PostList from './posts/PostList';
import PostDetail from './posts/PostDetail';
import EditPost from './posts/EditPost';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
