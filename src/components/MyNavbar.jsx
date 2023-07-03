import Logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary background">
                <Container>
                    <img className='logo-img' src={Logo}></img>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#moto">Moto</Nav.Link>
                            <Nav.Link href="#scooter">Scooter</Nav.Link>
                            <Nav.Link href="#quad">Quad</Nav.Link>
                            <NavDropdown title="Abbigliamento e Accessori" id="collasible-nav-dropdown"  className='background'>
                                <NavDropdown.Item className='background' href="#caschi">Caschi</NavDropdown.Item>
                                <NavDropdown.Item className='background' href="#guanti">Guanti</NavDropdown.Item>
                                <NavDropdown.Item className='background' href="#tute">Tute</NavDropdown.Item>
                                <NavDropdown.Item className='background' href="#stivali">Stivali</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Carrello">Carrello</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar;