import Logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { MdSportsMotorsports } from "react-icons/md";
import { Link } from "react-router-dom";


const MyNavbar = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary background">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-evenly' id="responsive-navbar-nav">
                        <Nav className="d-flex align-items-center mx-4">
                            <Link to='/Home'>
                                <img className='logo-img' src={Logo}></img>
                            </Link>
                            <Link to='/Moto' className='fs-5 fw-semibold link me-3' href="#moto">
                                Moto
                            </Link>
                            
                            <Link to='/Scooter' className='fs-5 fw-semibold link me-3' href="#scooter">
                                Scooter
                            </Link>
                            
                            <Link to='/Caschi' className='fs-5 fw-semibold link me-3' href="#caschi">
                                Caschi
                            </Link>

                            <Link to='/LoginPage' className='fs-5 fw-semibold link' href="#caschi">
                                Login
                            </Link>
        
                        </Nav>
                        <Nav className='ms-5'>
                        <Link to='/Profile' className='link me-3'>
                        <Nav.Link className='fs-5 d-flex align-items-center fw-semibold' href="#Carrello"><MdSportsMotorsports className='me-2 fs-4'></MdSportsMotorsports> Profilo </Nav.Link>
                        </Link>
                            <Nav.Link className='fs-5 d-flex align-items-center fw-semibold' href="#Carrello"><FaShoppingCart className='me-2'></FaShoppingCart> Carrello </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;