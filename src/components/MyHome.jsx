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

        <div className='d-flex justify-content-around my-5'>
            <img className='loghi' src={Honda}></img>
            <img className='loghi' src={Ducati}></img>
            <img className='loghi' src={Ktm}></img>
            <img className='loghi' src={Yamaha}></img>
            <img className='loghi' src={Aprilia}></img>
            <img className='loghi' src={Piaggio}></img>
        </div>
        </>
    )
}

export default MyHome;