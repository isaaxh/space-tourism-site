import { Link, NavLink } from 'react-router-dom';
import Style from './Header.module.css';
import { AppContext } from '../../contexts/AppContext';
import { useContext } from 'react';

interface NavBarProps {
  tabletScreen?: boolean;
}

const NavBar = ({tabletScreen} : NavBarProps) => {

  const { handleActiveTabState } = useContext(AppContext);

  const handleLinkClick = (currentTab: string) => {
    handleActiveTabState(currentTab)
  }

  return (
    <nav className={`${Style['nav-bar']} ${Style.glass}`}>
        <NavLink to='/'            onClick={() => handleLinkClick('home')}        className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>00</span>Home</NavLink>
        <NavLink to='/destination' onClick={() => handleLinkClick('destination')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>01</span>Destination</NavLink>
        <NavLink to='crew'         onClick={() => handleLinkClick('crew')}        className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>02</span>Crew</NavLink>
        <NavLink to='technology'   onClick={() => handleLinkClick('technology')}  className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>03</span>Technology</NavLink>
    </nav>
  )
}

export default NavBar;