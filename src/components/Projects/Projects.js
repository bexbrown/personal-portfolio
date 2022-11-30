import "./Projects.scss";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArrowLeft from "../../assets/icons/arrow-left.png";
import ArrowRight from "../../assets/icons/arrow-right.png";
import TurtleImg from "../../assets/images/turtle.png";
import SolarSystemImg from "../../assets/images/solar-system.png";
import EtchASketchImg from "../../assets/images/etch-a-sketch.png";
import PlantPetsImg from "../../assets/images/plant-pets.png";
// import VideoPlayerImg from "../../assets/images/video-player.png";
import HtmlImg from '../../assets/icons/html.png';
import CssImg from '../../assets/icons/css.png';
import JsImg from '../../assets/icons/js.png';
import ReactImg from '../../assets/icons/react.png';
import NodeImg from '../../assets/icons/node.png';
import ExpressImg from '../../assets/icons/express.png';
import TypescriptImg from '../../assets/icons/typescript.png';
import MySqlImg from '../../assets/icons/mysql.png';
import GitImg from '../../assets/icons/git.png';
import GitHubImg from '../../assets/icons/github.png';
import JestImg from '../../assets/icons/jest.png';
import FigmaImg from '../../assets/icons/figma.png';




function Projects() {

    let ProjectsInfo =
        [
            {
                title: "Cash Out Calculator",
                description: "This customized calculator was built for my current job in the service industry, to make the end of night cashout process a little easier.",
                techs: ["Tailwind", "React", "TypeScript", "Balsamiq"],
                icons: [],
                url: "https://calculator.com",
                // image: SolarSystemImg
            },
            {
                title: "Sea Bound",
                description: "A game highlighting the effects of plastic pollution on the sea turtle population.  Features include choice of sea turtle, sound effects, motion toggle, score keeper, end game on object collision, high score form and current leaderboard rankings.",
                techs: ["SCSS", "React", "MySQL", "Node", "Express", "Figma"],
                icons: [CssImg, ReactImg, MySqlImg, NodeImg, ExpressImg],
                url: "https://seabound.netlify.app",
                // image: TurtleImg
            },
            {
                title: "Video Player Website",
                description: "A multi-page video player website.  Features include a working comments section, ability to upload video, and toggle between videos.",
                techs: ["SCSS", "React", "Node", "Express"],
                icons: [CssImg, ReactImg, NodeImg, ExpressImg],
                // image: VideoPlayerImg
            },
            {
                title: "Etch-a-Sketch",
                description: "Sketch out some fun designs on this classic toy.",
                techs: ["HTML", "CSS", "JavaScript"],
                icons: [HtmlImg, CssImg, JsImg],
                url: "https://codepen.io/bexbrown/pen/KKeBqdb",
                // image: EtchASketchImg
            },
            {
                title: "Solar System Orbit",
                description: "This mini project is out of this world. A design challenge to create solar system orbits moving at a speed relative to their actual units.",
                techs: ["HTML", "CSS", "JavaScript"],
                icons: [HtmlImg, CssImg, JsImg],
                url: "https://codepen.io/bexbrown/pen/rNjvpMY",
                // image: SolarSystemImg
            }
        ]


    const [project, setProject] = useState(ProjectsInfo[0]);
    const [count, setCount] = useState(0);

    function handleLeftClick(event) {
        event.preventDefault();
        if (count === 0) {
            setCount(ProjectsInfo.length - 1);
        } else {
            setCount(count - 1);
        }
    }

    function handleRightClick(event) {
        event.preventDefault();
        if (count === ProjectsInfo.length - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }

    useEffect(() => {
        setProject(ProjectsInfo[count]);
    }, [count]);


    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">My Projects</h2>
            <div className="projects__content">
                <img src={ArrowLeft} alt="left arrow" className="projects__arrow projects__arrow--left" onClick={handleLeftClick} />
                <div className="projects__card">
                    <h3 className="projects__subtitle">{project.title}</h3>
                    <p className="projects__description">{project.description}</p>
                    <div className="projects__bottom">
                        <div className="projects__tech">
                            <ul className="projects__list">
                            {project.techs.map((tech) => {
                                return <li className="projects__item" key={uuidv4()}>{tech}</li>
                            })}
                            </ul>
                            <div className="projects__icons">
                            {project.icons.map((icon, index) => {
                                return <img src={icon} alt={project.techs[index]} className="projects__icon" key={uuidv4()}/>
                            })} 
                             </div> 
                        </div>

                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="projects__link"><img className="projects__img" src={project.image}  alt="project demo"/></a>
                    </div>
                </div>
                <img src={ArrowRight} alt="right arrow" className="projects__arrow projects__arrow--right" onClick={handleRightClick} />
            </div>
        </section>
    )
}

export default Projects;