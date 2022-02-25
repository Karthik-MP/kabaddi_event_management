import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Dashboard">Kabbadi League Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <PrivateRoute componenet={Dashboard} path="/Dashboard" exact>Home</PrivateRoute> */}
          <Link className="nav-link active" aria-current="page" to="/Dashboard">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
      </ul>
    <div className="navbar-right">
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className="nav-item"><Link className='nav-link' to='/'>Login</Link></li>
        <li className="nav-item"><Link className='nav-link' to='/Register'>Register</Link></li>
      </ul>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}
