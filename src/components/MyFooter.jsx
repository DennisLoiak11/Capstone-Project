import { BsTelephoneFill, BsInstagram } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';

const MyFooter = () => {
    return (
        <>
            <footer className="p-3 bg-dark text-white">
                <div className="container w-50 px-0">
                    <div className="row my-4">
                        <div className="col-12 col-md-6 col-lg-5 mx-2">
                            <p className="fs-5">CONTATTI</p>
                            <div className="text-secondary align-items-center mb-3 d-flex">
                                <BsTelephoneFill className='me-2'></BsTelephoneFill>
                                +39 3935359719
                            </div>
                            <div className="text-secondary align-items-center mb-3 d-flex">
                                <FiMail className='me-2'></FiMail>
                                dennisloiak@gmail.com
                                </div>
                            <div className="text-secondary align-items-center mb-3 d-flex">
                                <BsInstagram className='me-2'></BsInstagram>
                                dennisdebiasi
                                </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-5 mx-2">
                            <p className="fs-5">SFERA MOTOR</p>
                            <div className="text-secondary align-items-center mb-3 d-flex">
                                <MdLocationPin className='me-2'></MdLocationPin>
                                Viale La Bianca 18
                            </div>
                            <div className="text-secondary align-items-center mb-3 d-flex">
                                <BsTelephoneFill className='me-2'></BsTelephoneFill>
                                080 459 1177
                            </div>
                            <div className="text-secondary align-items-center mb-3 d-flex">
                                <FiMail className='me-2'></FiMail>
                                sferamotor@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MyFooter;