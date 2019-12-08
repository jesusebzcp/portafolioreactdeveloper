import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/img/Enmascarar grupo -1.png'


/* jesus@jesus-HP-Compaq-6005-Pro-Small-Form-Factor:~$ xmodmap -e "keycode 119= "0x3d""^C
jesus@jesus-HP-Compaq-6005-Pro-Small-Form-Factor:~$ 
 */



const Header = () => (
 
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
  <Link className="navbar-brand" to="/">
    <img src={logo} alt="logo" className="logo"/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="fas fa-bars"></span>

  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li class="nav-item ">
        <Link className="nav-link" activeclassname="active" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <NavLink activeclassname="active"  className="nav-link" to="/quien-soy">Portafolio</NavLink>
      </li>
   

      
    </ul>
<div className="redes">
<a href="#!" ><i className="fab fa-instagram"></i> <span className="especial" >@jesusbrice1</span></a>
<a href="#!" >
<i className="fab fa-github"></i> <span className="especial" >GitHUb</span></a>

</div>
  </div>
</nav>


)
export default Header;