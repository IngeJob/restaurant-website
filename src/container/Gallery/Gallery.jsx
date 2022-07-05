import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Gallery.css';

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft +=300;
    }
  }

  return(    
    <div className='app__gallery flex_center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Galería de Fotos</h1>
        <p className='p__opensans' style={{color:'#AAA', marginTop: '2rem'}}>Fotos publicadas en nuestra cuenta de Instagram donde podrá ver a detalle los exquisitos platos que ofrecemos</p>
        <button type='button' className='custom__button'>Ver Más</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {data.gallery.map((img, index)=>(
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={img.imgUrl} alt='Instagram gallery' />
                <a href={img.instaUrl} className='gallery__image-icon' target='_blank' rel='noreferrer'>
                  <BsInstagram />
                </a>
              
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
