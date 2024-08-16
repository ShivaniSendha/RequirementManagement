// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar.jsx';
import { CgMail } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import carosule from '../../assets/carousel1.jpg';
import logo from '../../assets/logo.png';
import User from '../../../Backend/Modules/User.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserLogin = () => {
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState();
  const [errorgmail, setErroegmail] = useState();
  const [password, setPassword] = useState();
  const [errorpassword, setErrorpassword] = useState();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
    navigate('/');
  };
  // const handleUseGmailChange = (e) => {
  //   setGmail(e.target.value);
  //   setErroegmail('');

  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   setErrorpassword('');
  // };



  // const handleSubmit = (e) => {
  //   e.preventDefault();


  //   if (gmail == "") {
  //     setErroegmail('Please enter Gmail');
  //   } else if (!gmail.includes('@')) {
  //     setErroegmail('Gmail must contain "@" symbol.');
  //   }

  //   if (password == "") {
  //     setErrorpassword('Please enter password.');
  //   }

  //   if (!errorgmail && !errorpassword) {
  //     console.log('Username:', gmail);
  //     console.log('Password:', password);
  //   }


  const collectData = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:8000/', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const result = await response.json();
      localStorage.setItem('users', JSON.stringify(result));
      let user = User.find({ email, password })
      console.error('SuucessFully:', user);
      navigate('/');
      toast.success('Login Successful');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('Login failed. Firstly you have to Sign-up.');
    }
  };




  return (
    <>
      <Navbar />

      <div className='container position-relative  p-5 '>

        <img src={carosule} alt="Background" className='position-absolute  top-0 start-0 w-100 h-100  object-fit-cover  rounded-2  shadow-sm  p-3  ' />

        <div className='d-flex justify-content-end position-absolute top-0 end-0 '>
          <button type="button" className="btn btn-outline-danger" onClick={handleClose}>
            <AiOutlineClose size={20} />
          </button>
        </div>

        <div className='d-flex justify-content-end align-items-center   position-relative border border-1 shadow  '>
          <img src={logo} alt="" className='w-50' />
          <div className=' d-flex flex-column text-center p-5 gap-5  w-50'>


            <div className='d-flex align-items-center gap-3'>
              <CgMail size={30} />
              <input
                className='p-2 rounded-4 border border-0 w-100'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Please Enter Gmail'
              />
            </div>
            {errorgmail && <p className='text-danger text-start f-4'>{errorgmail}</p>}
            <div className='d-flex align-items-center gap-3 '>
              <RiLockPasswordLine size={30} />
              <input
                className='p-2 rounded-4 border border-0 w-100'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Please Enter Password'
              />
            </div>
            {errorpassword && <p className='text-danger text-start'>{errorpassword}</p>}

            <button onClick={collectData} type="button" className="btn btn-primary bg-gradient bg-opacity-25 rounded-4 " >Login</button>
          </div>
        </div>
      </div>

    </>
  );
}


export default UserLogin;