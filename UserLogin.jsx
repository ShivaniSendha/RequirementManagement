import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './../../Component/Navbar/Navbar.jsx';
import { CgMail } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import carosule from './../../assets/carousel1.jpg';
import logo from './../../assets/logo.png';

const UserLogin = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setIsVisible(false);
        navigate('/');
    };

    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');

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
                                value={gmail}
                                onChange={(e) => setGmail(e.target.value)}
                                placeholder='Please Enter Gmail'
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
                            />
                        </div>
                        <button type="button" className="btn btn-primary bg-gradient bg-opacity-25 rounded-4 ">Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserLogin;
