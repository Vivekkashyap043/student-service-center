import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul className="nav justify-content-end bg-dark text-info p-3 fs-5">
      <li className="nav-item">
        <NavLink className="nav-link" to=" ">
          Home
        </NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-link" to="register">
          Register
        </NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-link" to="login">
          Login
        </NavLink>
      </li>
    </ul>
  )
}
export default Navbar
