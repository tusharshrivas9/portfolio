import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Portfolio. All Rights Reserved</p>
          </div>
          <div className="col-md-6 text-end">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
              <li className="list-inline-item"><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
