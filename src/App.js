
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
