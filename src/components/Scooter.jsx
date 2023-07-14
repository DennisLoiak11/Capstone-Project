import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sr125 from '../assets/Scooter/Aprilia_sr_125.avif';
import SrMax from '../assets/Scooter/Aprilia_sr_max_300.avif';
import Nmax125 from '../assets/Scooter/yamaha-n-max-125.webp';
import x10 from '../assets/Scooter/Piaggio_x10_350.avif';
import gts300 from '../assets/Scooter/Vespa_gts_300.webp';
import Liberty from '../assets/Scooter/Liberty_s_125.webp';
import Tmax from '../assets/Scooter/Tmax_560.webp';
import xadv from '../assets/Scooter/Honda_xadv_750.png';
import Beverly from '../assets/Scooter/Beverly_300.webp';
import xmax from '../assets/Scooter/Beverly_300.webp';
import aerox from '../assets/Scooter/yamaha-areox-50-2019.webp';
import sh from '../assets/Scooter/Honda_Sh_125.png';
import pcx from '../assets/Scooter/Honda_pcx-125.jpg';
import tricity from '../assets/Scooter/Yamaha_Tricity_300.jpg';
import srgt from '../assets/Scooter/Aprilia_srgt_200.webp';
import Medley from '../assets/Scooter/Medley_s_125.webp';


const Scooter = () => {
    return(
        <>
        <h2 className='text-center mt-4'>Ecco gli Scooter del nostro concessionario:</h2>
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Tmax} className='img-moto' />
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
                        <Card.Img variant="top" src={xadv} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda X-Adv</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 750 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 13.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  

                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Nmax125} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha N-Max</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 125 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 2.500 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  

                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={sh} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda Sh 125</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 125 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2020</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 4.600 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>      
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={gts300} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Vespa Gts 300</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> MotScooterard</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 300 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 3.400 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Liberty} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Piaggio Liberty</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 125 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2021</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 3.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Sr125} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Aprilia Sr 125</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 125 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 2.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={SrMax} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Aprilia Sr Max</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 300 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 3.700 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Beverly} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Piaggio Beverly</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 300cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2019</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 2.500 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={xmax} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha X-Max 400</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 400 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2020</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 4.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={aerox} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha Aerox</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 50 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2021</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 1.300 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={x10} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Piaggio X-10</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 350 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 2.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={pcx} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Honda Pcx</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 125 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 3.000 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={tricity} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Yamaha Tricity</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 300 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2020</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 3.700 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={srgt} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Aprilia Sr-Gt</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 200 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2022</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 2.750 €</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Aggiugni al Carrello</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>  
                
                <Col xs={12} md={6} lg={3}>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={Medley} className='img-moto' />
                        <Card.Body>
                            <Card.Title>Piaggio Medley S</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><b>Tipologia:</b> Scooter</ListGroup.Item>
                            <ListGroup.Item><b>Cilindrata:</b> 125 cc</ListGroup.Item>
                            <ListGroup.Item><b>Cambio:</b> Automatico </ListGroup.Item>
                            <ListGroup.Item><b>Anno immatricolazione:</b> 2017</ListGroup.Item>
                            <ListGroup.Item><b>Prezzo:</b> 2.500 €</ListGroup.Item>
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

export default Scooter