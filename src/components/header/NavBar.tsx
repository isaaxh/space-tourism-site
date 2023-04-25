import { Link } from 'react-router-dom';
import Style from './Header.module.css';

interface NavBarProps {
  tabletScreen?: boolean;
}


const NavBar = ({tabletScreen} : NavBarProps) => {
  return (
    <nav className={`${Style['nav-bar']} ${Style.glass}`}>
        <Link to='/'           className={Style['nav-links']}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>00</span>Home</Link>
        <Link to='/destination'className={Style['nav-links']}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>01</span>Destination</Link>
        <Link to='crew'        className={Style['nav-links']}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>02</span>Crew</Link>
        <Link to='technology'  className={Style['nav-links']}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>03</span>Technology</Link>
    </nav>
  )
}

export default NavBar;