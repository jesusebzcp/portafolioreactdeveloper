import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import withAutoplay from 'react-awesome-slider/dist/autoplay';

import creatividad from '../assets/img/creatividad.png'
import desktop from '../assets/img/code.png'
import phone from '../assets/img/phonEYEBZsvg.png'











const Gallery = () => {

 

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (


        <div className="reducir " >
    

        <AutoplaySlider 
        
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
      cssModule={AwesomeSliderStyles}>
      
        <div    data-src={creatividad} />
        <div    data-src={desktop} />
        <div   data-src={phone} />
      </AutoplaySlider>



      </div>
      );
}
 
export default Gallery;


