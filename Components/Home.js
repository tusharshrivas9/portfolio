import React from 'react';
import './Home.css';
// import resumePdf from './resume.pdf';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="innercointainer">
        <div className="left">
          <h2>
            Welcome to <span style={{ color: '#03d3fc' }}>My portfolio</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
            consectetur, quaerat maiores ullam dolorem quis facere, itaque natus iste
            delectus unde magnam odio eveniet! Atque rerum illo nam unde sint.
          </p>
          {/* <a href={resumePdf} download>
            <button className="btn btn-primary">Download Resume</button>
          </a> */}
        </div>
        <div className="right">
          <img src="tus.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
