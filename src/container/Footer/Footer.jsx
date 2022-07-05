import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contáctenos</h1>
        <p className='p__opensans'>Av. Simon Bolivar Y Sudamerica, Cordova-Argentina</p>
        <p className='p__opensans'>+59 3 58 84574</p>
        <p className='p__opensans'>+59 3 41 89745</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.mikuna} alt='footer_logo'/>
        <p className='p__opensans'>La mejor red social es una mesa rodeada de las personas que tu más quieres</p>
        <img src={images.spoon} alt='spoon' className='spoon_img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          
          <a href='https://www.facebook.com/profile.php?id=100082913294031' target='_blank' rel='noreferrer' ><FiFacebook /></a>
          <a href='https://www.instagram.com/testdevworld/' target='_blank' rel='noreferrer' ><FiInstagram /></a>
          <FiTwitter />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horario de atención</h1>
        <p className='p__opensans'>Lunes - Viernes</p>
        <p className='p__opensans'>14:00 - 23:00</p>
        <p className='p__opensans'>Sábado - Domingo</p>
        <p className='p__opensans'>17:00 - 01:00</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Mikuna. Todos los derechos reservados</p>
    </div>
  </div>
);

export default Footer;
