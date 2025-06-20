import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Topics from '../pages/Topics';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import About from '../pages/About';

/*
AppRoutes is used to define all the app's routes using react-router-dom
Routes - is the container that holds all the route definitions
Route - Each one defines a path and the component page that should show when user visits that url
*/

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/topics" element={<Topics />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/terms-of-service" element={<TermsOfService />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    )
}
export default AppRoutes;