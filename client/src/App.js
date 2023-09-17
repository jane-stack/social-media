import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import LoginPage from './pages/LoginPage';
import PostList from './posts/PostList';
// import PostDetail from './posts/PostDetail';
import EditPost from './posts/EditPost';
// import Home from './pages/Home';
import MyPage from './pages/MyPage';
import MyPosts from './pages/MyPosts';
import Conversation from './pages/Conversation';
import MyLikes from './pages/MyLikes';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id/edit" element={<EditPost/>} />
        {/* <Route path="/posts/:id" element={<PostDetail />} /> */}
        <Route path="/home" element={<MyPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/myconvo" element={<Conversation />} />
        <Route path="/mylikes" element={<MyLikes />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
