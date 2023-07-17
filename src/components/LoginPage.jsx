const LoginPage = () => {
    return (
        <>
        <h1 className="text-center my-4">Accedi</h1>
            <div className="my-4">
                <div className="center">
                    <form action="#">
                        <div className="input-grid mb-5">
                            <label htmlFor="email" className="form-label">Email address or Username</label>
                            <input type="text" className="input" placeholder="Email address or Username" required/>

                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="input" id="pass" placeholder="Password" required/>
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

export default LoginPage;