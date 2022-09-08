import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import NavBar from './NavBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
    return <>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </>
};

export default App;