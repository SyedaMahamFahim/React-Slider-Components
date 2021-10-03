import React,{useState} from 'react'
import Slider from "react-slick";
import ImageOne from './images/meka_01.jpg'
import ImageTwo from './images/meka_05.jpg'
import ImageThree from './images/meka_06.jpg'
import ImageFour from './images/meka_08.jpg'

import './style.css'
const NewSlider = () => {
    const images=[ImageOne,ImageTwo,ImageThree,ImageFour]
    const [imageIndex, setImageIndex] = useState(0);

    
      const settings = {
        infinite: true,
        dots: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect:false,
        autoplay: true,
        autoplaySpeed: 1500,
        beforeChange: (current, next) => setImageIndex(next),
      };
    
    return (
        <div className="center-div-slide">
        <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
      </div>
    )
}

export default NewSlider
// #01030D