import React from 'react'

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-heading p-3">Company Name</div>
            <hr className="divider" />
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Page1
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Page2
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Sidebar