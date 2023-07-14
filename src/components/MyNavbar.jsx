import Logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
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
                            <Link to='/Scooter' className='fs-5 fw-semibold link' href="#scooter">
                                Scooter
                            </Link>
                            <Dropdown className="d-inline mx-2">
                                <Dropdown.Toggle variant='black' className='fs-5 fw-semibold'>
                                    Abbigliamento e Accessori
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='background'>
                                    <Dropdown.Item href="#Caschi">Caschi</Dropdown.Item>
                                    <Dropdown.Item href="#Guanti">Guanti</Dropdown.Item>
                                    <Dropdown.Item href="#Tute da moto">Tute da moto</Dropdown.Item>
                                    <Dropdown.Item href="#Stivali">Stivali</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav className='ms-5'>
                        <Link to='/Profile' className='link'>
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