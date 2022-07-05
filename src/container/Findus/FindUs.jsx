import React from 'react';

import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contacto' />
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Encuéntrenos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Cordova, Av. Simon Bolivar y Sudamerica</p>
        <p className='p__cormorant' style={{color: '#DCCA87', marginTop: '2rem'}}>Horario de atención</p>
        <p className='p__opensans'>Lun - Vie: 14:00 - 23:00</p>
        <p className='p__opensans'>Sab y Dom: 17:00 - 01:00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visítenos</button>
    </div>

    <div className='app__wrapper_img'>
      <iframe title='maps' width="520" height="400" frameborder="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(estatua%20de%20la%20libertad)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
);

export default FindUs;
