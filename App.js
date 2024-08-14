// eslint-disable-next-line no-unused-vars
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from '../src/Component/Home.jsx'
import UserLogin from '../src/Screens/Login/UserLogin.jsx'
import Registration from './Screens/Registrations/Registration.jsx'



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
