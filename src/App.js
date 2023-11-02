import Address from './components/address/Address';
import Body from './components/Body/body';
// import Header from './components/Header/Header';
import About from './components/aboutUs/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter as Router } from "react-router-dom"



// import './App.css';
function App() {
  return (
    <>
    <Address />
    <Router>
      <NavBar />
      <Body />
      <ProductList />
      <About />
      <Contact />
      <div className="pages">
        {/* <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
    <Footer />
</>
    // <div className="App">
    //   <Address />
    //   <NavBar />
    //   {/* <Header /> */}
    //   <Body />
    //   <About />
    //   <Services />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}

export default App;
