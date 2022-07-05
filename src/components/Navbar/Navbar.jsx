import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'; //iconos instalados con la libraria
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import { useAuth0 } from '@auth0/auth0-react';

import images from '../../constants/images';

import './Navbar.css';
  const Navbar = () => {
    const[toggleMenu, setToggleMenu] = React.useState(false);
    
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    

    const[hide, setHide] = useState(false);
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHide(false) 
      } else {
        setHide(true)
      }
      prevScrollpos = currentScrollPos;
    }

    return(
      <nav className={hide ? 'app__navbar app__navbar-hide' : 'app__navbar'}>
        <div className='app__navbar-logo'>
          <img src={images.mikuna} alt='app logo' />
        </div>
 
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home'>Inicio</a></li>
          <li className='p__opensans'><a href='#about'>Acerca de Nosotros</a></li>
          <li className='p__opensans'><a href='#menu'>Menú</a></li>
          <li className='p__opensans'><a href='#awards'>Premios</a></li>
          <li className='p__opensans'><a href='#contact' >Contáctenos</a></li>
        </ul> 

        <div className='app__navbar-login'>        
          <a href="/" className='p__opensans'>Reservar Mesa</a>
        <div/>
          <a href='' onClick={()=>loginWithRedirect()} className='p__opensans' style={isAuthenticated?{display:'none'}:{display:'inline-block'}}>Ingresar / Registrarse</a>
          <a href='' onClick={()=>logout()} className='p__opensans' style={isAuthenticated?{display:'inline-block'}:{display:'none'}}>{isAuthenticated?user.name:''} / Cerrar Sesión</a>
        </div>

        <div className='app__navbar-mediumScreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)} />
          {toggleMenu &&(
          <div className='app__navbar-mediumScreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
            <ul className='app__navbar-mediumScreen-links'>
              <li className='p__opensans'><a href='#home'>Inicio</a></li>
              <li className='p__opensans'><a href='#about'>Acerca de Nosotros</a></li>
              <li className='p__opensans'><a href='#menu'>Menú</a></li>
              <li className='p__opensans'><a href='#awards'>Premios</a></li>
              <li className='p__opensans'><a href='#contact'>Contáctenos</a></li>
            </ul> 
          </div>
          )}
        </div>

        <div className='app__navbar-smallScreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)} />
          {toggleMenu &&(
          <div className='app__navbar-smallScreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
            <ul className='app__navbar-smallScreen-links'>
              <li className='p__opensans'><a href='#home'>Inicio</a></li>
              <li className='p__opensans'><a href='#about'>Acerca de Nosotros</a></li>
              <li className='p__opensans'><a href='#menu'>Menú</a></li>
              <li className='p__opensans'><a href='#awards'>Premios</a></li>
              <li className='p__opensans'><a href='#contact'>Contáctenos</a></li>
              <li className='p__opensans'><a href="/" className='p__opensans' onClick={()=>setToggleMenu(false)}>Reservar Mesa</a></li>
              <li className='p__opensans'><a href='' onClick={()=>loginWithRedirect()} className='p__opensans' style={isAuthenticated?{display:'none'}:{display:'inline-block'}}>Ingresar / Registrarse</a></li>
              <li className='p__opensans'><a href='' onClick={()=>logout()} className='p__opensans' style={isAuthenticated?{display:'inline-block'}:{display:'none'}}>{isAuthenticated?user.name:''} / Cerrar Sesión</a></li>
            </ul> 
          </div>
          )}
        </div>
      </nav>
    )
  };

export default Navbar;
