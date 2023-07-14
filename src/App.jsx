import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import MyHome from './components/MyHome';
import MyFooter from './components/MyFooter';
import ProfilePage from './components/ProfilePage';
import Moto from './components/Moto';

function App() {
  return (
    <>
    <BrowserRouter>
    <MyNavbar></MyNavbar>
        <Routes>
            <Route path="/Home" element={<MyHome/>}/>
            <Route path="/Profile" element={<ProfilePage/>}/>
            <Route path="/Moto" element={<Moto/>}/>
        </Routes>
    <MyFooter></MyFooter>
      </BrowserRouter>
    </>
  );
}

export default App;
