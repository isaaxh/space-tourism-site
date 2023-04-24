
interface NavBarProps {
  tabletScreen: boolean;
}


const NavBar = ({tabletScreen} : NavBarProps) => {
  return (
    <ul className='nav-bar glass'>
        <li className='nav-links'><span className={tabletScreen ? 'link-number-inactive' : 'link-number-active'}>00</span>Home</li>
        <li className='nav-links'><span className={tabletScreen ? 'link-number-inactive' : 'link-number-active'}>01</span>Destination</li>
        <li className='nav-links'><span className={tabletScreen ? 'link-number-inactive' : 'link-number-active'}>02</span>Crew</li>
        <li className='nav-links'><span className={tabletScreen ? 'link-number-inactive' : 'link-number-active'}>03</span>Technology</li>
    </ul>
  )
}

export default NavBar