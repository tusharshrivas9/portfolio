import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>

    </div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Tushar Shrivas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Project">Project</Link>
        </li>
        <li className="nav-item">
        <button type="button" className="buton btn btn-primary">in</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
