import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
                    <Container>
                        {/* Logo and brand name */}
                        <NavLink to="/" className="text-decoration-none text-light mx-2 brand-name">
                            <img src="/logo1.png" alt="Logo" className="navbar-logo" />
                            <span className="brand-title">Recipe App</span>
                        </NavLink>

                        <Nav className="me-auto">
                            {/* Navigation links */}
                            <Nav.Link as={NavLink} to="/" className="text-light mx-2 nav-link">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/create-recipe" className="text-light mx-2 nav-link">
                                Create Recipe
                            </Nav.Link>
                        </Nav>

                        <Nav className="text-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className="dropdown-btn" id="dropdown-basic">
                                    <div className="dropdown-img-container">
                                        <img src="/logo192.png" alt="User" className="dropdown-img" />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item as={NavLink} to="/login" className="text-decoration-none text-dark">
                                        Login
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;
