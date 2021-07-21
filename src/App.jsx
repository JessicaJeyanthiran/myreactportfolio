import './App.css';
import './components/menu/menu.css';
import './components/about/about.css';
import './components/portfolio/portfolio.css';
import './components/resume/resume.css';
import './components/contact/contact.css';
import About from './components/about/About';
import NavBar from './components/common/NavBar';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Footer from './components/common/Footer';
import {useState} from 'react';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='app'>
     <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>  
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <About/>
        <Portfolio/>
        <Resume/>
       <Contact/>
      </div>
      <Footer/>      
    </div>
  );
}

export default App;
