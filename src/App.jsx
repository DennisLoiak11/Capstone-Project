import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import MyHome from './components/MyHome';
import MyFooter from './components/MyFooter';
import ProfilePage from './components/ProfilePage';
import Moto from './components/Moto';
import Scooter from './components/Scooter';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
// import FirstPage from './components/FirstPage';

function App() {
  return (
    <>
    <RegisterPage/>
    {/* <BrowserRouter>
    <FirstPage/>
    <MyNavbar></MyNavbar>
        <Routes>
            <Route path="/Home" element={<MyHome/>}/>
            <Route path="/Profile" element={<ProfilePage/>}/>
            <Route path="/Moto" element={<Moto/>}/>
            <Route path="/Scooter" element={<Scooter/>}/>
            <Route path="/LoginPage" element={<LoginPage/>}/>
        </Routes>
    <MyFooter></MyFooter>
      </BrowserRouter> */}
    </>
  );
}

export default App;
