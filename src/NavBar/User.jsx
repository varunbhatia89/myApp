import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return <>
        <h1> User {fname} {lname} Page</h1>        
        <p>The Current URL of this Page is :   {location.pathname}</p>        
        <button onClick={()=>{navigate(-1)}}>go back to previous page</button>        
    </>
};

export default User;