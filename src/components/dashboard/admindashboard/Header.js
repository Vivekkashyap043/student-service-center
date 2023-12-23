import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div style={{ background: '#FFF8E1' }}>
            <div className="row">
                <div className="col">
                    <NavLink to="/admin-dashboard" style={{ textDecoration: "none" }}>
                        <h1 className='m-3 text-success' style={{ fontWeight: 700 }}>
                            Admin Dashboard
                        </h1>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
