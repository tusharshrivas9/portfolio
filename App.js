import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes,Route } from 'react-router-dom';
import Project from './Components/Project';




function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='Project' element={<Project/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
