import bgHome from '../assets/sfondo-home.jpg'
import Aprilia from '../assets/loghi/logo-aprilia.png'
import Ducati from '../assets/loghi/logo-ducati.png'
import Honda from '../assets/loghi/logo-honda.png'
import Ktm from '../assets/loghi/logo-ktm.png'
import Yamaha from '../assets/loghi/logo-yamaha.jpg'
import Piaggio from '../assets/loghi/logo-piaggio.png'

const MyHome = () => {
    return (
        <>
            <div className='d-flex'>
                <img className='bgHome img-fluid' src={bgHome}></img>
            </div>
            <p className='text-center fs-1 fw-bold mt-3'>SFERA MOTOR</p>
                <p className='text-center title fs-4'>Concessionario Bari, rivenditore autorizzato di:
            </p>

        <div className='d-flex align-items-center justify-content-around my-5'>
            <img className='loghi' src={Honda}></img>
            <img className='loghi' src={Ducati}></img>
            <img className='loghi' src={Ktm}></img>
            <img className='loghi' src={Yamaha}></img>
            <img className='loghi' src={Aprilia}></img>
            <img className='loghi' src={Piaggio}></img>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021.9554859521995!2d16.862985980642232!3d41.00386034786036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347bff8dfe16add%3A0xdcdabf394192a942!2sExpoCar%20Italia!5e0!3m2!1sit!2sit!4v1688486994135!5m2!1sit!2sit" className='mappa mt-4' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default MyHome;