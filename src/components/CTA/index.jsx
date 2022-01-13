import GooglePlayBadge from '../../assets/images/Hero/google-play-badge.svg';
import AppStoreBadge from '../../assets/images/Hero/app-store-badge.svg';
import PhoneMockup1 from '../../assets/images/CTA/phone-mockup-1.png';
import PhoneMockup2 from '../../assets/images/CTA/phone-mockup-2.png';

import './styles.css';

function CTA() {
  return (
    <section className='cta'>
      <div className='cta-wrapper'>
        <div className='cta-left-column'>
          <h2>Manage your projects from your mobile</h2>
          <p>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
          <h6>Get the App</h6>
          <div className='cta-get-app'>
            <img src={GooglePlayBadge} alt="Google Play icon" />
            <img src={AppStoreBadge} alt="App Store icon" />
          </div>
        </div> 
        <div className='cta-right-column'>
          <img className='cta-phone-1' src={PhoneMockup1} alt="Phone showing some functions of the app" />
          <img className='cta-phone-2' src={PhoneMockup2} alt="Phone showing some functions of the app" />
        </div> 
      </div>
    </section>
  )
}

export default CTA;