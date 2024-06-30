import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from './Components/Subscribe/Subscribe';
import MensWear from './Components/MensWear/MensWear';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import MensShoes from './Components/MensShoes/MensShoes';
import OrderPopup from './Components/OrderPopup/OrderPopup';
import SignUp from './Components/SignUp/SignUp';





const App = () => {

  const [signinPop, setSigninPop] = React.useState(false);

  const handleSignIn = () => {
    setSigninPop(!signinPop);
  };


  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = (data) => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect((data) => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} handleSignIn={handleSignIn}></Navbar>
      <Hero handleOrderPopup={handleOrderPopup}></Hero>
      <Products handleSignIn={handleSignIn}></Products>
      <TopProducts handleOrderPopup={handleOrderPopup}></TopProducts>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <MensWear handleSignIn={handleSignIn}></MensWear>
      <MensShoes ></MensShoes>
      <Testimonial></Testimonial>
      <Footer></Footer>
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <SignUp signinPop={signinPop} setSigninPop={setSigninPop}></SignUp>
    </div>
  )
};

export default App;
