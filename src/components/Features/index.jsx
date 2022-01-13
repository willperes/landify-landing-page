import Icon01 from '../../assets/images/Features/01.svg';
import Icon02 from '../../assets/images/Features/02.svg';
import Icon03 from '../../assets/images/Features/03.svg';
import Icon04 from '../../assets/images/Features/04.svg';
import Icon05 from '../../assets/images/Features/05.svg';
import Icon06 from '../../assets/images/Features/06.svg';

import './styles.css';

function Features() {
  return (
    <section className='features'>
      <h2>Tailor-made features</h2>
      <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
      <div className='feature-list'>
        <ul>
          <li><img src={Icon01} alt="Robust workflow icon" />
          <h5>Robust workflow</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></li>
          
          <li><img src={Icon02} alt="Flexibility icon" />
          <h5>Flexibility</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></li>

          <li><img src={Icon03} alt="User friendly icon" />
          <h5>User friendly</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></li>

          <li><img src={Icon04} alt="Multiple layouts icon" />
          <h5>Multiple layouts</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></li>

          <li><img src={Icon05} alt="Better components icon" />
          <h5>Better components</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></li>

          <li><img src={Icon06} alt="Well organised icon" />
          <h5>Well organised</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></li>
        </ul>
      </div>
    </section>
  )
}

export default Features;