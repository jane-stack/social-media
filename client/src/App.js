import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
      fetch(`/posts`)
      .then(resp => resp.json())
      .then(contents => setContents(contents))
  }, [])

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList contents={contents} />} />
        <Route path="/posts/:id" element={<PostDetail contents={contents} />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
