import './App.scss';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (

    <main className="main">
      <NavBar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
