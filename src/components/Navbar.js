import React from 'react'
import { Link } from 'react-router-dom'

const isLogin = () => {
  // const value = sessionStorage.getItem("auth");
  // return value ===  false? false : value
  return true
}
const userType=1;
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Kabbadi League Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {userType===-1?<div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLogin() &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/user/bookEvent" id='UserBookEvent'>Book Event</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/user/getSchedule" id='UserViewBookEvent'>View Booked Events</Link>
                  </li>
                </>}
            </ul>
            <div className="navbar-right">
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {isLogin() === false ? <><li className="nav-item"><Link className='nav-link' to='/user/login' id='loginButton'>Login</Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/user/signup' id='signupLink' >Register</Link></li></>
                  : <li className="nav-item"><Link className='nav-link' to='/user/login' id='logout'>Logout</Link></li>
                }
              </ul>

            </div>
          </div>:          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLogin() &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/admin/addVenue" id='adminVenues'>Venue</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/admin/addTeam" id='adminTeams'>Teams</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/admin/addReferee" id='adminReferee'>Referee</Link>
                  </li>
                </>}
            </ul>
            <div className="navbar-right">
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {isLogin() === false ? <><li className="nav-item"><Link className='nav-link' to='/user/login' id='loginButton'>Login</Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/user/signup' id='signupLink' >Register</Link></li></>
                  : <li className="nav-item"><Link className='nav-link' to='/user/login' id='logout'>Logout</Link></li>
                }
              </ul>

            </div>
          </div>}

        </div>
      </nav>
    </div>
  )
}
