import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeaderLogin.css';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="header-login-container">
      <h1 className="header-login-title">Welcome to the Blog Platform</h1>
      <p className="header-login-subtitle">
        Browse the latest blogs shared by our community. Dive into a world of ideas, stories, and insights!
      </p>
      <div className="blog-list">
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="blog-post">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.content.substring(0, 100)}...</p>
              <p className="blog-creator">Created by: {post.author.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderLogin;
