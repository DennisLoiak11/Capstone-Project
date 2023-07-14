import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Panigale from '../assets/Moto/Ducati_Panigale.avif'

const Moto = () => {
    return (
        <>
        <h2 className='text-center mt-4'>Ecco i gioielli del nostro concessionario:</h2>
        <Container className='my-5'>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Panigale} />
                        <Card.Body>
                            <Card.Title>Ducati Panigale V4</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Super Sportiva</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1.100 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2021</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 10.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>      
            </Row>
        </Container>
        </>
    )
}

export default Moto;