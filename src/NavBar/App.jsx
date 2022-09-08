import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import User from './User';
import Sresult from './Sresult';
import Error from './Error';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {   
    return <>
        <NavBar />
        <Routes>
            <Route exact="true" path="/" element={<AboutUs />} />
            <Route exact="true" path="/Sresult" element={<Sresult />} />
            <Route exact="true" path="/ContactUs" element={<ContactUs />} />
            <Route exact="true" path="/User/:fname/:lname" element={<User />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="*" element={<Navigate to ="/" />}/> */}
        </Routes>
    </>
};

export default App;