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
                <div className="col d-flex justify-content-end m-4">
                <NavLink to="/">
                        <u style={{color:"red"}}>Logout</u>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
