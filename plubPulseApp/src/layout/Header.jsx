import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faHouse, faBook, faBorderAll  } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Header = () => {

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm main-nav">
                <div className="container d-flex justify-content-between">
                    <div>
                        <NavLink to="/" className="navbar-brand">
                            <FontAwesomeIcon icon={faBookMedical} className="me-2"/>
                            <span className="fw-bold text-primary">PLAB Pulse</span>
                        </NavLink>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-text mx-3">
                                    <FontAwesomeIcon icon={faHouse}/>
                                    <span className="ms-2">Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/topics" className="nav-text mx-3">
                                    <FontAwesomeIcon icon={faBorderAll}/>
                                    <span className="ms-2">Topics</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-text mx-3">
                                    <FontAwesomeIcon icon={faBook}/>
                                    <span className="ms-2" onClick={() => handleStartQuiz("Shuffle")}>About</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;