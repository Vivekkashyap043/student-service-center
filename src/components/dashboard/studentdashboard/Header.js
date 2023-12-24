import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div style={{ background: '#FFF8E1' }}>
      <div className="row">
        <div className="col">
          <NavLink to=" " style={{ textDecoration: "none" }}>
            <h1 className='m-3 text-success' style={{ fontWeight: 700 }}>
              Student Dashboard
            </h1>
          </NavLink>
        </div>
        <div className="col">
          <ul className="nav justify-content-around  p-3 fs-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="id-card" style={{ color: "#000080" }}>
                <u> Apply for new id card</u>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="bonafide" style={{ color: "#000080" }}>
                <u> Apply for bonafide</u>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "#000080" }}>
                <u>Logout</u>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
