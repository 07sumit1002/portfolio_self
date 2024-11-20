import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Sociallinks from './Components/Sociallinks';
import Contacts from './Components/Contacts';
import Internship from './Components/Internship';
import Vision from './Components/Vision';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Vision/>
      <Skills/>
      <Projects/>
      <Sociallinks/>
      <Internship/>
      <Contacts/>
    </div>

  );
}

export default App;
