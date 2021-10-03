import React,{useState,useEffect} from "react";
import Arrows from "./Arrow";
import SlideContent from "./SlideContent";
import SlideData from "./SlideData";

const len = SlideData.length - 1;

const SecondSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
   
   
    
  return (
    <>
      <div className="main">
        <div className="inner">
            <div className="col1">
                <img src="https://www.themekaverse.com/images/mattey.jpg" alt="" />
            </div>
        
            <div className="col2">
            <Arrows
        prevS={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextS={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
            <SlideContent activeIndex={activeIndex} slideData={SlideData} />
    
     
            </div>
        </div>
      </div>
    </>
  );
};

export default SecondSlider;
