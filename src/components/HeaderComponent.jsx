import React from 'react'
import { NavLink } from 'react-router-dom'; // for showing a particular navbar tab as active

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark fw-bold text-center bg-black">
                    <a className='navbar-brand mx-auto fs-3' href='/home'>Job Application Portal</a>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-lg-5">
                                <NavLink exact to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item me-lg-5">
                                <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
                            </li>
                            <li className="nav-item me-lg-5">
                                <NavLink to="/search" className="nav-link" activeClassName="active">Search Jobs</NavLink>
                            </li>
                            <li className="nav-item me-lg-5">
                                <NavLink to="/contact" className="nav-link" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/signout">Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent