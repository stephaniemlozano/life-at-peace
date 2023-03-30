import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>Oops, you've navigated to a page that does not exist!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
