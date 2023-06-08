import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationSearch from './Components/LocationSearch';
import About from "./Components/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
 

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="LocationSearch" element={<LocationSearch />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} /> 
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />  
          <Route path="Login" element={<Login />} />  
          <Route path="Signup" element={<Signup />} />  
        </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;
