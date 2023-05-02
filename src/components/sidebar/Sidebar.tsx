import Style from './Sidebar.module.css'
import HeaderStyle from '../header/Header.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const handleLinkClick = (currentTab: string) => {
        
    }
  return (
    <div className={`${Style.container} ${HeaderStyle.glass}`}>
        <div className={Style['cross-container']}>
            <div>X</div>
        </div>
        <nav className={`${HeaderStyle['nav-bar']} ${Style['nav-links-container']}`}>
            <NavLink to='/'            onClick={() => handleLinkClick('home')} className={({ isActive }) => (isActive ? `${Style.active} ${HeaderStyle['nav-links']}`: `${Style.inactive} ${HeaderStyle['nav-links']}`)}><span className={HeaderStyle['link-number-active']}>00</span>Home</NavLink>
            <NavLink to='/destination' onClick={() => handleLinkClick('destination')} className={({ isActive }) => (isActive ? `${Style.active} ${HeaderStyle['nav-links']}`: `${Style.inactive} ${HeaderStyle['nav-links']}`)}><span className={HeaderStyle['link-number-active']}>01</span>Destination</NavLink>
            <NavLink to='crew'         onClick={() => handleLinkClick('crew')} className={({ isActive }) => (isActive ? `${Style.active} ${HeaderStyle['nav-links']}`: `${Style.inactive} ${HeaderStyle['nav-links']}`)}><span className={HeaderStyle['link-number-active']}>02</span>Crew</NavLink>
            <NavLink to='technology'   onClick={() => handleLinkClick('technology')} className={({ isActive }) => (isActive ? `${Style.active} ${HeaderStyle['nav-links']}`: `${Style.inactive} ${HeaderStyle['nav-links']}`)}><span className={HeaderStyle['link-number-active']}>03</span>Technology</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar