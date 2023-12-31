import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Panigale from '../assets/Moto/Ducati_Panigale.avif';
import Dorsoduro from '../assets/Moto/Aprilia_dorsoduro_900.avif'
import ApriliaRS from '../assets/Moto/Aprilia_rs_V4.avif'
import Hypermotard from '../assets/Moto/Ducati_Hypermotard.png'
import YamahaR1 from '../assets/Moto/Yamaha_r1.webp'
import Multistrada from '../assets/Moto/Ducati_Multistrada.avif'
import AfricaTwin from '../assets/Moto/Honda_africa_twin.jpg'
import HondaCBR from '../assets/Moto/honda_cbr_rr.png'
import Duke from '../assets/Moto/Ktm_duke_790.png'
import Cb600 from '../assets/Moto/honda_cb_600_r.webp'
import KtmExc from '../assets/Moto/ktm_exc_450_cross.jpg'
import Mt09 from '../assets/Moto/Yamaha_MT09.webp'
import Tenere from '../assets/Moto/Yamaha_tenere_700.webp'
import Tracer from '../assets/Moto/Yamaha_Tracer_900.webp'
import Ktm690 from '../assets/Moto/Ktm_690.avif'
import Crf450 from '../assets/Moto/Honda_crf_450.avif'

const Moto = () => {
    return (
        <>
        <h2 className='text-center mt-4'>Ecco i gioielli del nostro concessionario:</h2>
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Panigale} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Ducati Panigale V4</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Super Sportiva</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1.100 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2021</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 25.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>      
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Dorsoduro} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Aprilia Dorsoduro 900</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Motard</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 900 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2018</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 9.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  

                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={YamahaR1} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha R1</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Super Sportiva</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1000 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 26.500 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  

                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={ApriliaRS} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Aprilia RS V4</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Super Sportiva</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1.100 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2020</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 19.600 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>      
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Hypermotard} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Ducati Hypermotard</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Motard</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 950 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 17.400 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Multistrada} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Ducati Multistrada</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Motard</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1200 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2021</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 19.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={AfricaTwin} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda Africa Twin</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Motard</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1100 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 16.500 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={HondaCBR} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda CBR RR</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Super Sportiva</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 1100 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 18.700 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Duke} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Ktm Duke</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Naked</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 790 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 12.700 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Cb600} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda CB 600</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Naked</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 600 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2020</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 15.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={KtmExc} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Ktm Exc 450</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Cross</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 450 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2021</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 10.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Mt09} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha MT 09</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Naked</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 900 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 13.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Tenere} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha Tenerè</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Enduro</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 700 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 13.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Tracer} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha Tracer</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Strada</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 900 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2020</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 12.300 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Ktm690} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Ktm 690</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Enduro</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 690 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 16.700 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Crf450} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda CRF 450</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Cross</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 450 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Manuale </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2017</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 11.200 €</ListGroup.Item>
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