import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Palabra del chef'/>
      <h1 className='headtext__cormorant'>En lo que creemos</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Con la cocina ecuatoriana crecí y a la que añoro,</p>
        </div>
        <p className='p__opensans'>la cocina y los sabores de los cuales estoy orgulloso. Cuando servimos un menú de cocina ecuatoriana en un evento internacional y los asistentes preguntan por el chef y quieren las recetas de los platos y luego recibo mails de agradecimiento por la receta, es la mayor satisfacción que tengo</p>
      </div>

      <div className='app__chef-sign'>
        <p>Esteban Ugarra</p>
        <p className='p__opensans'>Chef</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
