import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BlogLead from './components/BlogLead';
import BusinessHere from './components/BusinessHere';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import SheHero from './components/SheHero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BlogLead />
      <BusinessHere />
      <ImageSlider />
      <SheHero />
      <Footer />
    </div>
  );
}

export default App;
