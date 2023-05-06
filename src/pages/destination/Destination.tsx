import Style from './Destination.module.css';
import moonImg from '../../assets/destination/image-moon.png';


const Destination = () => {
  return (
    <div className={Style.container}>
      <h5 className={Style['sub-title']}><span className={Style['sub-title-number']}>01</span> Pick your destination</h5>
      <div className={Style['img-container']}>
        <img className={Style['destination-img']} src={moonImg} alt="moon" />
      </div>
      <nav className={Style['nav-container']}>
        <li className={Style['destination-links']}>Moon</li>
        <li className={Style['destination-links']}>Mars</li>
        <li className={Style['destination-links']}>Europa</li>
        <li className={Style['destination-links']}>Titan</li>
      </nav>
      <div className={Style['content-container']}>
        <h1 className={Style.title}>Moon</h1>
        <p className={Style.description}>  
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
          regain perspective and come back refreshed. While you’re there, take in some history 
          by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <hr />
        <div className={Style['stat-container']}>
          <div className={Style["stat-distance"]}>
            <h5 className={Style['stat-subheadings']}>Avg. distance</h5>
            <h3 className={Style['stat-data']}>384,400 km</h3>
          </div>
          <div className={Style["stat-travel-time"]}>
            <h5 className={Style['stat-subheadings']}>Est. travel time</h5>
            <h3 className={Style['stat-data']}>3 days</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination