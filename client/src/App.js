import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import LoginPage from './pages/LoginPage';
import PostList from './posts/PostList';
import EditPost from './posts/EditPost';
import MyPage from './pages/MyPage';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id/edit" element={<EditPost/>} />
        <Route path="/home" element={<MyPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
