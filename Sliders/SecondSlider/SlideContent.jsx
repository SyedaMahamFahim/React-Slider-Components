import React from 'react'
import "./secondslider.css";

const SlideContent = ({activeIndex,slideData}) => {
    return (
        <div>
             <section className="custome-slid">
                {
                    slideData.map((value,index)=>{
                        return(
                            <>
                            <div className="main-img-col" className={index === activeIndex ? "custome-slid custome-slid-active" : "custome-slid-inactive"}
                            style={{
                               
                            }}>
                                <div className="slid-img">
                                    <img src={value.image1} alt="" />
                                </div>
                                <div className="slid-img">
                                <img src={value.image2} alt="" />
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default SlideContent
