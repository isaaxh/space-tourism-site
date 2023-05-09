import React from 'react'
import imgDouglas from '../../assets/crew/image-douglas-hurley.png';
import imgVictor from '../../assets/crew/image-victor-glover.png';
import imgAnousheh from '../../assets/crew/image-anousheh-ansari.png';
import imgMark from '../../assets/crew/image-mark-shuttleworth.png';

const Slider = () => {

   
  return (
    <>
         <div className="slider-container">
        {/* <!-- Slider main container --> */}
            <div className="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            <div className="swiper-slide"><img src={imgDouglas} alt="douglas' img" /></div>
                {/* <div className="swiper-slide"><img src={imgMark} alt="mark's img" /></div> */}
                {/* <div className="swiper-slide"><img src={imgVictor} alt="victor's img" /></div> */}
                {/* <div className="swiper-slide"><img src={imgAnousheh} alt="anousheh's img" /></div> */}
            </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

        </div>
      </div>
    </>
  )
}

export default Slider