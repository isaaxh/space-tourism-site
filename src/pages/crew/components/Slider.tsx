import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css'; 
import img1 from '../../../assets/crew/image-douglas-hurley.png';
import img2 from '../../../assets/crew/image-victor-glover.png';
import img3 from '../../../assets/crew/image-anousheh-ansari.png';
import img4 from '../../../assets/crew/image-mark-shuttleworth.png';

const Slider = () => {
    const slides = [];
    const imgs = [img1, img2, img3, img4];

    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}> 
                <img 
                    src={imgs[i]} 
                    alt={`img-${i}`}
                    />
            </SwiperSlide>
        );
    }
   
  return (
    <>
        <Swiper id='main'>
            {slides}
        </Swiper>
    </>
  )
}

export default Slider