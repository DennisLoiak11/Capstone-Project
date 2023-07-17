import { Link } from "react-router-dom";

const FirstPage = () => {
    return(
        <>
        <h1 className="text-center">Ciao, benvenuto nel nostro concessionario.</h1>
        <h3 className="text-center">Se hai già un account: <Link className="link" to='/LoginPage'>ACCEDI</Link></h3>
        <h3 className="text-center">Se non già un account: <Link className="link" to='/RegisterPage'>REGISTRATI</Link></h3>
        </>
    )
}

export default FirstPage;