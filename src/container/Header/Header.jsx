import React from 'react';

import { SubHeading } from '../../components';
import{images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Persigue el nuevo sabor' />
      <h1 className='app__header-h1' >Cocina Tradicional Gourmet </h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>
      Una pizca de creatividad. Mezclar aromas, colores y texturas. Darle un toque gourmet más la esencia del sabor ancestral.
      </p>
      <a href='https://q.bstatic.com/data/bsuitewf/fbd9a24033c5b7c8ea5d4c8c1f84bf9e9ae4eb4a.pdf' target='_blank' rel='noreferrer' type='button' className='custom__button'>Explora el menú </a>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
