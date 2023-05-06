import { useState } from 'react';
import '../../App.css';
import Style from './Destination.module.css';
import HeaderStyle from '../../components/header/Header.module.css';
import moonImg from '../../assets/destination/image-moon.png';



const Destination = () => {
  const [currentTab, setCurrentTab] = useState<string>('moon')

  const handleLinkClick = (nextTab: string) => {
    setCurrentTab(nextTab)
  } 

  return (
    <div className={Style.container}>
      <h5 className={Style['sub-title']}><span className={Style['sub-title-number']}>01</span> Pick your destination</h5>
      <div className={Style['img-container']}>
        <img className={Style['destination-img']} src={moonImg} alt="moon" />
      </div>
      <nav className={Style['nav-container']}>
        <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'moon'  ? HeaderStyle['active'] : ''}`}   onClick={() => handleLinkClick('moon')}   >Moon</li>
        <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'mars'  ? HeaderStyle['active'] : ''}`}   onClick={() => handleLinkClick('mars')}   >Mars</li>
        <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'europa'? HeaderStyle['active'] : ''}`} onClick={() => handleLinkClick('europa')} >Europa</li>
        <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'titan' ? HeaderStyle['active'] : ''}`}  onClick={() => handleLinkClick('titan')}  >Titan</li>
      </nav>
      <div className={Style['content-container']}>
        <h1 className={Style.title}>Moon</h1>
        <p className={Style.description}>  
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
          regain perspective and come back refreshed. While you’re there, take in some history 
          by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <hr />
        <div className={Style['stats-container']}>
          <div className={Style["stats-distance"]}>
            <div className={`sub-heading-2 ${Style['stat-subheadings']}`}>Avg. distance</div>
            <div className={`sub-heading-1 ${Style['stat-data']}`}>384,400 km</div>
          </div>
          <div className={Style["stats-time"]}>
            <div className={`sub-heading-2 ${Style['stat-subheadings']}`}>Est. travel time</div>
            <div className={`sub-heading-1 ${Style['stat-data']}`}>3 days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination