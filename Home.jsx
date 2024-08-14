// eslint-disable-next-line no-unused-vars
import { React } from 'react';
import { Carousel } from 'react-bootstrap';
import carosule from '../../src/assets/carousel1.jpg';
import carosule1 from '../../src/assets/carousel4.avif';
import carosule2 from '../../src/assets/carousel3.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap 
import Navbar from './Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel className="custom-carousel">

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carosule}
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover' }} // Inline styles for height and object-fit
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carosule1}
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }} // Inline styles for height and object-fit
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carosule2}
            alt="Third slide"
            style={{ height: '400px', objectFit: 'cover' }} // Inline styles for height and object-fit
          />
          {/* <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
