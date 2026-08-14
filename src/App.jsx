import {Routes ,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Directory from "./pages/Directory";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";


import ScrollToTop from "./components/ScrollToTop";



function App() {

  return(



    <>
    <ScrollToTop/>
     <Navbar />
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/directory" element={<Directory/>} />
      <Route path="/appointment" element={<Appointment/>} />
      <Route path="/Contact" element={<Contact/>} />



    </Routes>
    
    <Footer/>
    </>



  );


}


export default App;