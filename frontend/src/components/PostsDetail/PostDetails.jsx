import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetails.css';

const PostDetails = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details-container">
      <h1 className="post-details-title">{post.title}</h1>
      <p className="post-details-content">{post.content}</p>
      <p className="post-details-author">Written by: {post.author.username}</p>
    </div>
  );
};

export default PostDetails;
