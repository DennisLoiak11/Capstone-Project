const RegisterPage = () => {
    return(
        <>
            <h1 className="text-center my-4">Registrati</h1>
            <div className="my-4">
                <div className="center">
                    <form action="#">
                        <div className="input-grid mb-5">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="input mb-4" id="nome" placeholder="Nome" />

                            <label htmlFor="cognome" className="form-label">Cognome</label>
                            <input type="text" className="input mb-4" id="cognome" placeholder="Cognome" />

                            <label htmlFor="email" className="form-label">Email address or Username</label>
                            <input type="text" className="input  mb-4" id="email" placeholder="Email address or Username" />

                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="input  mb-4" id="pass" placeholder="Password" required />
                        </div>
                        <div className="form-down">
                            <button>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;