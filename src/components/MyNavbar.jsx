import Logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";
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
                            <Nav.Link className='fs-5 fw-semibold' href="#moto">
                                Moto
                                </Nav.Link>
                            <Nav.Link className='fs-5 fw-semibold' href="#scooter">
                                Scooter
                                </Nav.Link>
                            <Dropdown className="d-inline mx-2">
                                <Dropdown.Toggle variant='black' className='text-dark fs-5 fw-semibold' id="dropdown-autoclose-true">
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
                        <Nav className=''>
                            <Nav.Link className='fs-5 d-flex align-items-center' href="#Carrello"><FaShoppingCart className='me-2'></FaShoppingCart> Carrello </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;