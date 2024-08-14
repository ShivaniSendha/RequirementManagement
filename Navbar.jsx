// eslint-disable-next-line no-unused-vars
import { React } from 'react'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/registration'); // Navigate to the registration page
  };
  const handleClickLogin = () => {
    navigate('/userlogin')
  }
  const handleClickHome = () => {
    navigate('/')
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-transparent shadow-sm p-3 mb-5 bg-body-danger ">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} alt="Logo" style={{ width: '10%', height: 'auto' }} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-end ">
              <li className="nav-item">
                <button className="btn btn-outline-primary ms-2 " type="submit" onClick={handleClickHome}>
                  Home
                </button>
              </li>

              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary dropdown-toggle ms-2" data-bs-toggle="dropdown" aria-expanded="false">
                  Job
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item btn-outline-primary" href="#">Available Job</a></li>
                  <li><a class="dropdown-item" href="#">Apply Now</a></li>

                </ul>
              </div>

            </ul>

            <button className="btn btn-outline-primary ms-2 " type="submit" onClick={handleClickLogin}>
              Login <FaLongArrowAltRight />
            </button>
            <button className="btn btn-outline-primary ms-2" type="submit" onClick={handleClick}>
              Sign-up <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
