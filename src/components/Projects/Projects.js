import "./Projects.scss";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArrowLeft from "../../assets/icons/arrow-left.png";
import ArrowRight from "../../assets/icons/arrow-right.png";
// import TurtleImg from "../../assets/images/turtle.png";
// import SolarSystemImg from "../../assets/images/solar-system.png";
// import EtchASketchImg from "../../assets/images/etch-a-sketch.png";
// import PlantPetsImg from "../../assets/images/plant-pets.png";
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
                title: "Sea Bound",
                description: "Sea Bound is an interactive game highlighting the effects of plastic waste on the ocean ecosystems.  Basic features include some cool interesting impressive features which I built. Other Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
                techs: ["HTML", "CSS", "React", "MySQL", "Node", "Express"],
                icons: [HtmlImg, CssImg, ReactImg, MySqlImg, NodeImg, ExpressImg],
                // image: TurtleImg
            },
            {
                title: "Plant Pets",
                description: "A green twist on the tamagotchi pet. Try to find all matches in the fewest possible attempts.There are some interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
                techs: ["HTML", "CSS", "React", "Node", "Express"],
                icons: [HtmlImg, CssImg, ReactImg, NodeImg, ExpressImg ],
                // image: PlantPetsImg
            },
            {
                title: "Video Player Website",
                description: "A Mock youtube video player.  Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
                techs: ["HTML", "CSS", "React", "MySQL", "Node", "Express"],
                icons: [HtmlImg, CssImg, ReactImg, MySqlImg, NodeImg, ExpressImg],
                // image: VideoPlayerImg
            },
            {
                title: "Etch-a-Sketch",
                description: "Sketch out some awesome designs on this classic toy. Basic features include some cool interesting impressive features which I built. Other Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
                techs: ["HTML", "CSS", "JavaScript", "React"],
                icons: [HtmlImg, CssImg, JsImg, ReactImg],
                // image: EtchASketchImg
            },
            {
                title: "Solar System Orbit",
                description: "Sketch out some awesome designs on this classic toy. Basic features include some cool interesting impressive features which I built. Other Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
                techs: ["HTML", "CSS", "JavaScript"],
                icons: [HtmlImg, CssImg, JsImg],
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

                        <img className="projects__img" src={project.image}  alt="project demo"/>
                    </div>
                </div>
                <img src={ArrowRight} alt="right arrow" className="projects__arrow projects__arrow--right" onClick={handleRightClick} />
            </div>
        </section>
    )
}

export default Projects;