import React from 'react';



const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto p-4" style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.1)" }}>
          <h2 className="text-center mb-4">Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
          </form>
        </div>
        <div className="col-md-6 mx-auto p-4 d-flex align-items-center justify-content-center">
          <img src="https://creativedesignkitchens.com/wp-content/uploads/2020/01/phone-1024x710.png" alt="Contact" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
