import GooglePlayBadge from '../../assets/images/Hero/google-play-badge.svg';
import AppStoreBadge from '../../assets/images/Hero/app-store-badge.svg';
import Logo from '../../assets/images/Footer/logo.svg';

import './styles.css';

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-links">
        <a href='https://landify.design/' target='_blank'><img src={Logo} alt="Landify logo" /></a>
          <span>
            <a href='#'>Download Now</a>
            <a href='#'>License</a>
          </span>
          <span>
            <a href='#'>About</a>
            <a href='#'>Features</a>
            <a href='#'>Pricing</a>
            <a href='#'>Careers</a>
            <a href='#'>Help</a>
            <a href='#'>Privacy Policy</a>
          </span>
          <p>© 2020 Landify UI Kit. All rights reserved</p>
        </div>
        <div className="footer-app-download">
          <h6>Get the App</h6>
          <img src={AppStoreBadge} alt='App store icon' />
          <img src={GooglePlayBadge} alt='Google play icon' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;