import React from "react";

function Arrows({ prevS, nextS }) {
  return (
      <>

    <div className="next-prev-slid">
          
                <button className="slid-line-btn" onClick={prevS}></button>
                {/* <i class="fa fa-chevron-circle-left" aria-hidden="true" ></i> */}
               
                <button className="slid-line-btn" onClick={nextS} style={{background:"white"}}></button>
                {/* <i class="fa fa-chevron-circle-right" aria-hidden="true" ></i> */}
               
                
     </div>
</>


  );
}

export default Arrows;