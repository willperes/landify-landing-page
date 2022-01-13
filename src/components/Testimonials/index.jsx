import AirbnbLogo from '../../assets/images/Partners/airbnb-logo.svg';
import HubspotLogo from '../../assets/images/Partners/hubspot-logo.svg';
import BookMyShowLogo from '../../assets/images/Partners/bookmyshow-logo.svg';

import './styles.css';

function Testimonials() {
  return (
    <section className='testimonials'>
      <div className='customers'>
        <div className='left-column'>
          <div className='heading'>
            <blockquote><h2>Real Stories from Real Customers</h2></blockquote>
            <p>Get inspired by these stories.</p>
          </div>
          <ul>
            <li className='hubspot'>
              <img className='hubspot-logo' src={HubspotLogo} alt="Hubspot logo" />
              <blockquote><p>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p></blockquote>
              <h5>Floyd Miles</h5>
              <p className='job-position'>Vice President, GoPro</p>
            </li>
          </ul>
        </div>
        <div className='right-column'>
          <ul>
            <li className='airbnb'>
              <img className='airbnb-logo' src={AirbnbLogo} alt="Airbnb logo" />
              <blockquote><p>I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p></blockquote>
              <h5>Jane Cooper</h5>
              <p className='job-position'>CEO, Airbnb</p>
            </li>
            <li className='book-my-show'>
              <img className='bookmyshow-logo' src={BookMyShowLogo} alt="Book my show logo" />
              <blockquote><p>Landify saved our time in designing my company page.</p></blockquote>
              <h5>Kristin Watson</h5>
              <p className='job-position'>Co-Founder, BookMyShow</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;