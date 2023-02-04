import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const anchors = ["1", "2", "3", "4"];

const App = () => (
  <>
    <NavBar className="navigation" />
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      navigat
      onLeave={(origin, destination, direction) => {
        // console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        // console.log("render prop change", state, fullpageApi);

        return (

          <div>
            {/* <NavBar className="navigation"/> */}

            {/* <div className="section" data-anchor="profile"><Profile /></div> */}
            <div className="section" ><Profile id="profile" /></div>
            <div className="section" ><About id="about" /></div>
            <div className="section" ><Projects id="projects" /></div>
            <div className="section" ><Contact id="contact" /></div>
          </div>

        );
      }}
    />
  </>
);

export default App;
