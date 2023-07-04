import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/MyNavbar';
import MyHome from './components/MyHome';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
            <Route path="/Home" element={<MyHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
