import './styles.css';
import LandifyLogo from '../../assets/images/Hero/landify-logo.svg';
import GooglePlayBadge from '../../assets/images/Hero/google-play-badge.svg';
import AppStoreBadge from '../../assets/images/Hero/app-store-badge.svg';
import PhoneMockup from '../../assets/images/Hero/phone-mockup.svg';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-wrapper'>
        <header>
          <ul>
            <li className='logo'><a href='https://landify.design/' target='_blank'><img src={LandifyLogo} alt='Landify logo' /></a></li>
            <li className='header-options'><p>About</p></li>
            <li className='header-options'><p>Products</p></li>
            <li className='header-options'><p>Pricing</p></li>
            <li className='header-options'><p>Blog</p></li>
            <li className='header-options'><p>Jobs</p></li>
            <div className='header-right-buttons'>
              <li className='header-options'><img src={GooglePlayBadge} alt='Google Play download button' /></li>
              <li className='header-options'><img src={AppStoreBadge} alt='App Store download button' /></li>
            </div>
          </ul>
        </header>
        <div className='hero-content'>
          <div className='hero-content-headings'>
            <h1>Organise projects.</h1>
            <h1>Get more done.</h1>
            <button>Get Started</button>
          </div>
          <div className='hero-content-image'>
            <img src={PhoneMockup} alt="Phone image containing app details" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;