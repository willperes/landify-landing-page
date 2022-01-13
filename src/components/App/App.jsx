import Achievements from '../Achievements';
import Article from '../Article';
import CTA from '../CTA';
import Features from '../Features';
import Footer from '../Footer';
import GetStarted from '../GetStarted';
import Hero from '../Hero';
import Partners from '../Partners';
import Testimonials from '../Testimonials';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Partners />
      <Features />
      <Testimonials />
      <Achievements />
      <GetStarted />
      <Article />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
