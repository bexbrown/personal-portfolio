import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const anchors = ["profile", "about", "projects", "contact"];

const App = () => (
  <>
  <NavBar className="navigation"/>
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
          
            <div>
              <div className="section" data-anchor="profile"><Profile /></div>
              <div className="section" data-anchor="about"><About /></div>
              <div className="section" data-anchor="projects"><Projects /></div>
              <div className="section" data-anchor="contact"><Contact /></div>
            </div>
        
      );
    }}
  />
  </>
);

export default App;
