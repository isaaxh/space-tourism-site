import Style from './Crew.module.css';
import Slider from './components/Slider';

const Crew = () => {

  

  return (
    <div className={Style.container}>
      <h5 className={Style['sub-title']}><span className={Style['sub-title-number']}>02</span>Meet your crew</h5>
      <Slider />           
      <hr />
    </div>
  )
}

export default Crew