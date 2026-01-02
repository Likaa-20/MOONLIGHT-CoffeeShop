import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Styles/coffeeshop.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Update from './Pages/Update';
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";


const AdminRoute = ({ children }) => {
  const isAdmin = sessionStorage.getItem("admin");

  return isAdmin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={ <AdminRoute><Menu/></AdminRoute>} />
        <Route path="/update/:id" element={<AdminRoute> <Update /> </AdminRoute> }/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default App;