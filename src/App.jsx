import Navbar from "./components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

   const [showLogin,setShowLogIn] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogIn={setShowLogIn} />:<></>}
     <div  className="app">
      <Navbar setShowLogIn={setShowLogIn} />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order' element={<PlaceOrder/>}></Route>
     </Routes>
     
    </div>
    <Footer />
    </>
   
  )
}

export default App