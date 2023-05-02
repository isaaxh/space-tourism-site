import React from 'react'
import Style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const handleLinkClick = (currentTab: string) => {
        
    }
  return (
    <div className={Style.container}>
        <div className={Style['cross-container']}>
            X
        </div>
        <nav className={` ${Style['nav-links-container']} ${Style.glass}`}>
            <NavLink to='/'          onClick={() => handleLinkClick('home')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>00</span>Home</NavLink>
            <NavLink to='/destination' onClick={() => handleLinkClick('destination')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>01</span>Destination</NavLink>
            <NavLink to='crew'         onClick={() => handleLinkClick('crew')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>02</span>Crew</NavLink>
            <NavLink to='technology'   onClick={() => handleLinkClick('technology')} className={({ isActive }) => (isActive ? `${Style.active} ${Style['nav-links']}`: `${Style.inactive} ${Style['nav-links']}`)}><span className={Style['link-number-active']}>03</span>Technology</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar