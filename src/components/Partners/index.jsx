import AirbnbLogo from '../../assets/images/Partners/airbnb-logo.svg';
import HubspotLogo from '../../assets/images/Partners/hubspot-logo.svg';
import GoogleLogo from '../../assets/images/Partners/google-logo.svg';
import MicrosoftLogo from '../../assets/images/Partners/microsoft-logo.svg';
import WalmartLogo from '../../assets/images/Partners/walmart-logo.svg';
import FedexLogo from '../../assets/images/Partners/fedex-logo.svg';
import Divider from '../../assets/images/Partners/divider.svg';

import './styles.css';

function Partners() {
  return (
    <section className='partners'>
      <img className='divider' src={Divider} alt="Line divider" />
      <ul className='partner-logo'>
        <li><img src={AirbnbLogo} alt="Airbnb logo" /></li>
        <li><img src={HubspotLogo} alt="Hubspot logo" /></li>
        <li><img src={GoogleLogo} alt="Google logo" /></li>
        <li><img src={MicrosoftLogo} alt="Microsoft logo" /></li>
        <li><img src={WalmartLogo} alt="Walmart logo" /></li>
        <li><img src={FedexLogo} alt="Fedex logo" /></li>
      </ul>
      <img className='divider' src={Divider} alt="Line divider" />
    </section>
  )
}

export default Partners;