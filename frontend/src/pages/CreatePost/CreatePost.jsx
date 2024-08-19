import React, { useState } from "react";
import axios from "axios";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ handleSetLogin }) => {
  handleSetLogin(true)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/posts/createpost", // Adjust to your backend endpoint
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success
      console.log("Post created successfully:", response.data);

      // Optionally, you can redirect or clear form fields
      setTitle("");
      setContent("");
      // Redirect or show a success message as needed
      handleSetLogin(true);
      navigate("/");
    } catch (error) {
      console.error("There was an error creating the post!", error);
    }
  };

  return (
    <div className="create-post-container">
      <h1 className="create-post-title">Create a New Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter your post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="form-control"
            placeholder="Write your post content here..."
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="create-post-btn">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
