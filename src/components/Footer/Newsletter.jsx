import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    
    <div className='app__newsletter-heading'>
      <SubHeading title='Boletín informativo'/>
      <h1 className='headtext__cormorant'>Suscríbete a nuestro boletín informativo</h1>
      <p className='p__opensans'>Y No te pierdas de las últimas actualizaciones</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Ingrese su correo electrónico' style={{background: '#ddd', color: '#333'}}  />
      <button className='custom__button'>Suscríbete</button>
    </div>
  </div>
);

export default Newsletter;
