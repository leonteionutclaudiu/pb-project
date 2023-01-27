import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Questions from './components/Questions/Questions';
import Section2 from './components/Section2/Section2';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Section2 />
      <Testimonials />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
