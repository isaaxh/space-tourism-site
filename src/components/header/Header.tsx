import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import { ReactComponent as BurgerMenu } from '../../assets/shared/icon-hamburger.svg';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

const Header = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 1024);
  const [isTablet, setTablet] = useState(window.innerWidth < 768);
  const [isMobile, setMobile] = useState(window.innerWidth < 480);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setTablet(window.innerWidth > 480 && window.innerWidth < 1024);
    setMobile(window.innerWidth < 480);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='header'>
        <Logo />
        <div>
          {isDesktop ? <hr/> : null}
        </div>
        {!isMobile ? <NavBar tabletScreen={isTablet} /> : <BurgerMenu />}
    </div>
  )
}

export default Header;