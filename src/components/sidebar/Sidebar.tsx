import Style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import { AppContext } from '../../contexts/AppContext';
import { useContext, useEffect } from 'react';

const Sidebar = () => {

    const { isMenuOpen, handleActiveTabState } = useContext(AppContext)

    useEffect(() => {
      console.log(isMenuOpen);                                                  
    }, [isMenuOpen])
    

    const handleLinkClick = (currentTab: string) => {
        handleActiveTabState(currentTab)
    }

  return (
    <div className={`${Style.container} ${Style.glass} ${isMenuOpen ? Style.menuOpen : Style.menuClose}`}>
        <div className={Style['cross-container']}>
            <ClearIcon className={Style.cross}/>
        </div>
        <nav className={`${Style['nav-links-container']}`}>
            <NavLink to='/'            onClick={() => handleLinkClick('home')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>00</span>Home</NavLink>
            <NavLink to='/destination' onClick={() => handleLinkClick('destination')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>01</span>Destination</NavLink>
            <NavLink to='crew'         onClick={() => handleLinkClick('crew')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>02</span>Crew</NavLink>
            <NavLink to='technology'   onClick={() => handleLinkClick('technology')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>03</span>Technology</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar;