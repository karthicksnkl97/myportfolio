import { useState } from 'react';
import './App.css';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <p className='my-name'>K Karthick</p>
      <ul className='nav-list'>
        <li className={menu === "home" ? "active" : <></>} onClick={() =>setMenu("home")}><AnchorLink className='anchorlink' href='#home'> Home</AnchorLink></li>
        <li  className={menu === "about" ? "active" : <></>   } onClick={() =>setMenu("about")}> <AnchorLink className='anchorlink' offset={50} href='#about'>About</AnchorLink></li>
        <li  className={menu === "skills" ? "active" : <></>} onClick={() =>setMenu("skills")} > <AnchorLink className='anchorlink' offset={50} href='#skills'>Skills</AnchorLink></li>
        <li  className={menu === "projects" ? "active" : <></> } onClick={() =>setMenu("projects")}> <AnchorLink className='anchorlink' offset={50} href='#projects'>Projects</AnchorLink></li>
        <li  className={menu === "contact" ? "active" : <></>} onClick={() =>setMenu("contact")}> <AnchorLink className='anchorlink' offset={50} href='#contact'>Contact</AnchorLink></li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
