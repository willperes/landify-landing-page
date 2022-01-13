import Icon01 from '../../assets/images/Features/01.svg';
import Icon04 from '../../assets/images/Features/04.svg';
import Icon05 from '../../assets/images/Features/05.svg';
import Icon07 from '../../assets/images/Features/07.svg';

import './styles.css';

function Achievements() {
  return (
    <section className='achievements'>
      <div className='achievements-content'>
        <div className='content'>
          <h2>Our 18 years of achievements</h2>
          <p>With our super powers we have reached this</p>
        </div>
        <div className='achievement-list'>
          <ul>
            <div className='achievement-row-left'>
              <li>
                <img src={Icon01} alt="Downloads per day icon" />
                <span>
                  <h4>10,000 +</h4>
                  <p>Downloads per day</p>
                </span>
              </li>
              <li>
                <img src={Icon05} alt="Number of clients icon" />
                <span>
                  <h4>500+</h4>
                  <p>Clients</p>
                </span>
              </li>
            </div>
            <div className='achievement-row-right'>
              <li>
                <img src={Icon04} alt="Number of users icon" />
                <span>
                  <h4>2 Million</h4>
                  <p>Users</p>
                </span>
              </li>
              <li>
                <img src={Icon07} alt="Countries where people have used landify icon" />
                <span>
                <h4>140</h4>
                  <p>Countries</p>
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Achievements;