import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import { ReactComponent as BurgerMenu } from '../assets/shared/icon-hamburger.svg';

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <BurgerMenu />
    </div>
  )
}

export default Header;