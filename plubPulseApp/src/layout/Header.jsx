import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faHouse, faBook, faBorderAll  } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
// boostrap?

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <FontAwesomeIcon icon={faBookMedical} className="me-2" />
                        <span className="fw-bold text-primary">PLAB Pulse</span>
                    </Link>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                            <FontAwesomeIcon icon={faHouse} className="me-2"/>
                            <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quiz" className="nav-link">
                                <FontAwesomeIcon icon={faBook} className="me-2"/>
                                <span>Quiz</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/topics" className="nav-link">
                                <FontAwesomeIcon icon={faBorderAll} className="me-2"/>
                                <span>Topics</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;