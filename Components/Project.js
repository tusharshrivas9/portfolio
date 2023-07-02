import React from 'react';
import ProjectData from "./Data"
import "./Project.css"


const Project = () => {
  return (
    <>
      <div className="container2">
        <h2 className="center2">Projects</h2>
        <div className="card2">
          <div className="row justify-content-center">
            {ProjectData.map((el, index) => (
              <div className="col-10 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card text-center">
                  <div className="card-body">
                    <p className='card-id'>{el.id}</p>
                    <h5 className="card-title">{el.ProjectName}</h5>
                    <p className="card-text">{el.text}</p>
                    <a href="/" className="btn btn-primary">{el.links} <button className='btn btn-primary'>GO Live</button></a>
                  </div>
                  <div className="overlay">
                    <h5 className="card-title">{el.ProjectName}</h5>
                    <a href="/" className="btn btn-primary">{el.links} <button className='btn btn-primary'>GO Live</button></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
