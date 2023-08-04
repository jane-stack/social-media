import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import EditPost from './forms/EditPost';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
