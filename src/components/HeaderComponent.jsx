import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark fw-bold text-center bg-black">
                    <a className='navbar-brand mx-auto fs-3' href='/'>Job Application Portal</a>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-lg-5">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a className="nav-link" href="/search">Search Jobs</a>
                            </li>
                            <li className="nav-item me-lg-5">
                                <a className="nav-link" href="/contact">Contact Us</a>
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