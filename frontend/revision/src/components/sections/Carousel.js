import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
  
export default function App() {
  return (
    <div style={{ display: 'block', width: 500, padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require('./../../assets/images/slide1.png')}
            alt="One"
          />
            <h3>Label for second slide</h3>
        <div className='capttext'>
        </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={require("./../../assets/images/slide2.png")}
            alt="Two"
          />
          <h3>Label for second slide</h3>
          <div className='capttext'>
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}