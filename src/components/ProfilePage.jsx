import Avatar from '../assets/avatar1.jpg'

const ProfilePage = () => {
    return (
        <div style={{ backgroundColor: '#eee' }}>
            <div className="container py-5">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-lg-4 ps-0">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src={Avatar} alt="avatar" className="rounded-circle img-fluid avatar" style={{ width: '150px' }} />
                                <h5 className="my-3">Dennis De Biasi</h5>
                                <p className="text-muted mb-1">CEO Sfera Motor</p>
                                <p className="text-muted mb-4">Bari, Adelfia</p>
                            </div>
                        </div>
                    </div>
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Nome</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-2">Dennis De Biasi</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-2">example@example.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Cellulare</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-2">+39 339 4534893</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Telefono</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-2">080 459 1177</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage;