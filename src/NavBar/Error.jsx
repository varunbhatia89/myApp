import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <span className="display-1 d-block">404</span>
                    <div className="mb-4 lead">The page you are looking for was not found.</div>
                    {/* <a href="https://www.totoprayogo.com/#" className="btn btn-link">Back to Home</a> */}
                    <NavLink to="/" className="btn btn-link">Back to Home</NavLink>
                </div>
            </div>
        </div>        
    </>
};

export default Error;