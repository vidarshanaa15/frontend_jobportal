import React from 'react'

const HomeComponent = () => {
    return (
        <div className="container mt-5">
            <div className="col-md-8 mx-auto">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://i.ibb.co/25ZkXNt/about.jpg"
                                alt="About us"
                                className="img-fluid rounded-start w-75"
                            />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">
                                    Welcome to Job Application Portal, your one-stop destination for job seekers and employers alike. We connect talented professionals with top companies and make it easy to manage applications all in one place
                                </p>
                                <a href="/about" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent