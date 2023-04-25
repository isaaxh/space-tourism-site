import { Link, NavLink } from 'react-router-dom';
import Style from './Header.module.css';

interface NavBarProps {
  tabletScreen?: boolean;
}


const NavBar = ({tabletScreen} : NavBarProps) => {
  return (
    <nav className={`${Style['nav-bar']} ${Style.glass}`}>
        <NavLink to='/'           className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>00</span>Home</NavLink>
        <NavLink to='/destination' className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>01</span>Destination</NavLink>
        <NavLink to='crew'         className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>02</span>Crew</NavLink>
        <NavLink to='technology'   className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={tabletScreen ? Style['link-number-inactive'] : Style['link-number-active']}>03</span>Technology</NavLink>
    </nav>
  )
}

export default NavBar;