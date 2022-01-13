import PhoneMockup from '../../assets/images/GetStarted/phone-mockup.png';

import './styles.css';

function GetStarted() {
  return (
    <section className='get-started'>
      <div className='get-started-content'>
        <div className='get-started-img-wrapper'>
          <img src={PhoneMockup} alt="Phone image showing the some app functions" />
        </div>
        <div className='get-started-heading'>
          <h3>Headline</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
          <button>Get started 🡢</button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted;