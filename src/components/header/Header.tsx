import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import { ReactComponent as BurgerMenu } from '../../assets/shared/icon-hamburger.svg';
import { useContext, useEffect, useState } from 'react';
import NavBar from './NavBar';
import Style from './Header.module.css';
import { AppContext } from '../../contexts/AppContext';

const Header = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 1024);
  const [isTablet, setTablet] = useState(window.innerWidth < 768);
  const [isMobile, setMobile] = useState(window.innerWidth < 480);

  const { isMenuOpen, handleMenuOpenState } = useContext(AppContext);

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setTablet(window.innerWidth > 480 && window.innerWidth < 1024);
    setMobile(window.innerWidth < 480);
  };
  
  const handleBurgerMenuClick = (nextState: boolean) => {
    handleMenuOpenState(nextState)
  }

  return (
    <div className={Style.header}>
        <Logo />
        <div className={Style['hr-div']}>
          {isDesktop ? <hr/> : null}
        </div>
        {!isMobile ? <NavBar tabletScreen={isTablet} /> : <BurgerMenu onClick={() => handleBurgerMenuClick(true)} />}
    </div>
  )
}

export default Header;