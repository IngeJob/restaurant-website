import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.M} alt="m letter" />
    </div>

    <div className='app__aboutus-content flex__center' >
      <div className='app__aboutus-content_aboutus'>
        <h1 className='headtext__cormorant'>Acerca de Nosotros</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Tratamos de vincular sabores de antaño con presentaciones muy creativas y modernas, más del tipo fusión y gourmet</p>
        <button type='button' className='custom__button'>Saber más</button>
      </div>

      <div className='app__aboutus-content_knife flex-center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Nuestra Historia</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Empezamos con el sueño de crear un restaurante dedicado a la comida típica ecuatoriana con un estilo contemporaneo y cuidado al detalle</p>
        <button type='button' className='custom__button'>Saber más</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
