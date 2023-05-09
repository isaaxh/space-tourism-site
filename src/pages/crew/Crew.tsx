import Style from './Crew.module.css';
import crew1 from '../../assets/crew/image-douglas-hurley.png'

const Crew = () => {

  return (
    <div className={Style.container}>
      <h5 className={Style['sub-title']}><span className={Style['sub-title-number']}>02</span>Meet your crew</h5>
      <div className="slider-container">
      {/* <!-- Slider main container --> */}
        <div className="swiper">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            ...
          </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          {/* <!-- If we need scrollbar --> */}
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
      <hr />

    </div>
  )
}

export default Crew