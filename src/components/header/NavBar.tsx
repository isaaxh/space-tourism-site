
interface NavBarProps {
  tabletScreen: boolean;
}


const NavBar = ({tabletScreen} : NavBarProps) => {
  return (
    <ul className='nav-bar glass'>
        <li className='nav-links'><span className={!tabletScreen ? 'link-number-active' : 'link-number-inactive'}>00</span> Home</li>
        <li className='nav-links'><span className={!tabletScreen ? 'link-number-active' : 'link-number-inactive'}>01</span> Destination</li>
        <li className='nav-links'><span className={!tabletScreen ? 'link-number-active' : 'link-number-inactive'}>02</span> Crew</li>
        <li className='nav-links'><span className={!tabletScreen ? 'link-number-active' : 'link-number-inactive'}>03</span> Technology</li>
    </ul>
  )
}

export default NavBar