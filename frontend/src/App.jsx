import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Added Route import
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NavbarLogin from './components/NavbarLogin/NavbarLogin';
import CreatePost from './pages/CreatePost/CreatePost';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import PostDetails from './components/PostsDetail/PostDetails';

function App() {
  const [isLogin,setIsLogin] = useState(false);

  const handleSetLogin = (e)=>{
    setIsLogin(e);
  }

  return (
    <Router>
      {!isLogin?<Navbar />: <NavbarLogin handleSetLogin={handleSetLogin} />}
      <Routes>
        <Route path='/' element={<Home isLogin={isLogin} />} />
        <Route path='/createpost' element={<CreatePost handleSetLogin={handleSetLogin} />} />
        <Route path='/login' element={<Login handleSetLogin={handleSetLogin} />} />
        <Route path='/signup' element={<Signup  />} />
        <Route path='/post/:id' element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
