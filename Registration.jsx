/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar.jsx';
import { CgMail } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import carosule from '../../assets/carousel1.jpg';
import logo from '../../assets/logo.png';
import { FaRegUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    // Check if email ends with @gmail.com and follows a basic email format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith('@gmail.com');
  };

  const validatePassword = (password) => {
    return /^\d{5,}$/.test(password);
  };

  const collectData = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error('Please enter your name.');
      return;
    }

    if (!email) {
      toast.error('Please enter your email.');
      return;
    }

    if (!password) {
      toast.error('Please enter your password.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid Gmail address.');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must be at least 5 digits long and contain only digits.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const result = await response.json();
      localStorage.setItem('users', JSON.stringify(result));

      navigate('/userlogin');
      toast.success('Registration Successful');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='container position-relative p-5'>
        <img src={carosule} alt="Background" className='position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-2 shadow-sm p-3' />

        <div className='d-flex justify-content-end position-absolute top-0 end-0'>
          <button type="button" className="btn btn-outline-danger" onClick={handleClose}>
            <AiOutlineClose size={20} />
          </button>
        </div>

        <div className='d-flex justify-content-end align-items-center position-relative border border-1 shadow'>
          <img src={logo} alt="Logo" className='w-50' />
          <div className='d-flex flex-column text-center p-5 gap-5 w-50'>
            <div className='d-flex align-items-center gap-3'>
              <FaRegUser size={30} />
              <input
                className='p-2 rounded-4 border border-0 w-100'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Please Enter Name'
                required
              />
            </div>

            <div className='d-flex align-items-center gap-3'>
              <CgMail size={30} />
              <input
                className='p-2 rounded-4 border border-0 w-100'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Please Enter Gmail'
                required
              />
            </div>

            <div className='d-flex align-items-center gap-3'>
              <RiLockPasswordLine size={30} />
              <input
                className='p-2 rounded-4 border border-0 w-100'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Please Enter Password'
                required
              />
            </div>

            <button onClick={collectData} type="button" className="btn btn-primary bg-gradient bg-opacity-25 rounded-4">Register</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
