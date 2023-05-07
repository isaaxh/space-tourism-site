import { useState } from 'react';
import '../../App.css';
import Style from './Destination.module.css';
import HeaderStyle from '../../components/header/Header.module.css';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';
import DestinationTemplate from './components/DestinationTemplate';


const Destination = () => {
  const [currentTab, setCurrentTab] = useState<string>('moon')

  const handleLinkClick = (nextTab: string) => {
    setCurrentTab(nextTab)
  }

  let currentImg = moonImg;
  switch (currentTab) {
    case 'moon':
      currentImg = moonImg;
      break
    case 'mars':
      currentImg = marsImg;
      break
    case 'europa': 
      currentImg = europaImg;
      break
    case 'titan':
      currentImg = titanImg;
      break
    default:
      currentImg = moonImg;
  }

  let content = null
  switch (currentTab) {
    case 'moon':
      content = <DestinationTemplate 
                  destinationTitle='MOON' 
                  destinationDescription='See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                  regain perspective and come back refreshed. While you’re there, take in some history 
                  by visiting the Luna 2 and Apollo 11 landing sites.'
                  statsDistance=' 384,400 KM'
                  statsTime='3 DAYS'/>
      break
    case 'mars':
      content = <DestinationTemplate 
                  destinationTitle='Mars' 
                  destinationDescription='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                  the tallest planetary mountain in our solar system. It’s two and a half times 
                  the size of Everest!'
                  statsDistance='225 mil. km'
                  statsTime='9 months'/>
      break
    case 'europa':
      content = <DestinationTemplate 
                  destinationTitle='Europa' 
                  destinationDescription='The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                  ice skating, curling, hockey, or simple relaxation in your snug 
                  wintery cabin.'
                  statsDistance='628 mil. km'
                  statsTime='3 years'/>
      break
    case 'titan':
      content = <DestinationTemplate 
                  destinationTitle='Titan' 
                  destinationDescription='The only moon known to have a dense atmosphere other than Earth, Titan 
                  is a home away from home (just a few hundred degrees colder!). As a 
                  bonus, you get striking views of the Rings of Saturn.'
                  statsDistance='1.6 bil. km'
                  statsTime='7 years'/>
      break
    default:
      content = null
  }


  return (
    <div className={Style.container}>
      <h5 className={Style['sub-title']}><span className={Style['sub-title-number']}>01</span> Pick your destination</h5>
      <div className={Style['img-container']}>
        <img className={Style['destination-img']} src={currentImg} alt="moon" />
      </div>
      <div className={Style['content-container']}>
        <nav className={Style['nav-container']}>
          <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'moon'  ? HeaderStyle['active'] : ''}`}   onClick={() => handleLinkClick('moon')}   >Moon</li>
          <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'mars'  ? HeaderStyle['active'] : ''}`}   onClick={() => handleLinkClick('mars')}   >Mars</li>
          <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'europa'? HeaderStyle['active'] : ''}`} onClick={() => handleLinkClick('europa')} >Europa</li>
          <li className={`${HeaderStyle['nav-links']} ${Style['destination-links']} ${currentTab === 'titan' ? HeaderStyle['active'] : ''}`}  onClick={() => handleLinkClick('titan')}  >Titan</li>
        </nav>
        {content}
      </div>
    </div>
  )
}

export default Destination