import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import ServicePage from './Components/ServicePage';
import Footer from './Components/Footer/Footer';




function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about/" element={<AboutPage />} />
        <Route exact path="/contact/" element={<ContactPage />} />
        <Route exact path="/service/" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;
