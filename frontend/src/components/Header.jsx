import React from 'react'

const Header = () => {
    return (
        <div className="header d-flex justify-content-center align-items-center gap-4 border rounded p-3">
            <h1 className="h2">Dashboard</h1>
            {/* <!-- Search Bar --> */}
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." />
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>

            {/* <!-- Profile Dropdown --> */}
            <div className="btn-group">
                {/* <button className="" type="button">

                </button> */}
                <button className="btn btn-secondary rounded-circle dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle"></i>
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header