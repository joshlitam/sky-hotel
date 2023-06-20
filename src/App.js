
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
