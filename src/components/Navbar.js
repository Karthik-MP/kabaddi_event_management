import React from 'react'
import { Link } from 'react-router-dom'

const isLogin = () => {
  const value = sessionStorage.getItem("auth");
  return value === null ? false : value
}

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Kabbadi League Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li> */}
            </ul>
            <div className="navbar-right">
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {isLogin() === 'false' ? <><li className="nav-item"><Link className='nav-link' to='/user/login'>Login</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/user/signup'>Register</Link></li></>
                  : <li className="nav-item"><Link className='nav-link' to='/user/login'>Logout</Link></li>
                }
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
