import "./Projects.scss";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArrowLeft from "../../assets/icons/arrow-left.png";
import ArrowRight from "../../assets/icons/arrow-right.png";
import TurtleImg from "../../assets/images/turtle.png";
// import BrainflixImg from "../../assets/images/brainflix.png";
// import SolarSystemImg from "../../assets/images/solar-system.png";
import MultiStepFormImg from "../../assets/images/multi-step-form.png";
import EtchASketchImg from "../../assets/images/etch-a-sketch.png";
import CashoutCalculatorImg from "../../assets/images/cashout-calculator.png"
import RockPaperScissorsImg from "../../assets/images/rock-paper-scissors.png";
import HtmlImg from '../../assets/icons/html.png';
import CssImg from '../../assets/icons/css.png';
import JsImg from '../../assets/icons/js.png';
import ReactImg from '../../assets/icons/react.png';
import NodeImg from '../../assets/icons/node.png';
import ExpressImg from '../../assets/icons/express.png';
import MySqlImg from '../../assets/icons/mysql.png';
import BandSiteImg from '../../assets/images/band-site.png';

function Projects() {

    let ProjectsInfo =
        [
            {
                title: "Sea Bound",
                description: "A game highlighting the effects of plastic pollution on the sea turtle population.  Features include choice of sea turtle, sound effects, motion toggle, score keeper, end game on object collision, high score form and current leaderboard rankings.  ***ONLY AVAILABLE ON DESKTOP AS IT REQUIRES ARROW KEYS***",
                techs: ["SCSS", "React", "MySQL", "Node", "Express", "Figma"],
                icons: [CssImg, ReactImg, MySqlImg, NodeImg, ExpressImg],
                url: "https://seabound.netlify.app",
                image: TurtleImg
            },
            {
                title: "Band Website",
                description: "A multi-page band website.  Features include a working comments section, embedded music player, and photo hover effects.",
                techs: ["HTML", "SCSS", "React"],
                icons: [HtmlImg, CssImg, ReactImg],
                url: "https://thebeeskneesband.netlify.app",
                image: BandSiteImg
            },
            {
                title: "Multi Step Form",
                description: "A multi-step form which includes a toggle feature, choice of add-ons, summary of selections and confirmation of order.",
                techs: ["React", "SCSS"],
                icons: [ReactImg, CssImg],
                url: "https://bexbrown-multi-step-form.netlify.app/",
                image: MultiStepFormImg
            },
            {
                title: "Cash Out Calculator",
                description: "This custom calculator was built for my job in the service industry with the goal of making the end of night cash out process a little easier.",
                techs: ["React", "SCSS"],
                icons: [ReactImg, CssImg],
                url: "https://cashout-calculator.netlify.app",
                image: CashoutCalculatorImg
            },
            // {
            //     title: "Video Player Website",
            //     description: "A multi-page video player website.  Features include a working comments section, ability to upload video, and toggle between videos.",
            //     techs: ["SCSS", "React", "Node", "Express"],
            //     icons: [CssImg, ReactImg, NodeImg, ExpressImg],
            //     url: "https://quickflix.netlify.app",
            //     image: BrainflixImg
            // },
            {
                title: "Rock, Paper, Scissors",
                description: "Test your luck against the computer in this classic and simple game.",
                techs: ["HTML", "SCSS", "React"],
                icons: [HtmlImg, CssImg, ReactImg],
                url: "https://bexbrown-rps-game.netlify.app",
                image: RockPaperScissorsImg
            },
            // {
            //     title: "Matching Game",
            //     description: "Test your memory with this game. Match the coloured tiles with their pair in the fewest attempts possible.",
            //     techs: ["SCSS", "React", "Node", "Express"],
            //     icons: [CssImg, ReactImg, NodeImg, ExpressImg],
            //     url: "https://codepen.io/bexbrown/pen/rNKZEWR",
            //     // image: VideoPlayerImg
            // },
            {
                title: "Etch-a-Sketch",
                description: "Sketch out some fun designs on this classic toy, then clear the board and start again!",
                techs: ["HTML", "CSS", "JavaScript"],
                icons: [HtmlImg, CssImg, JsImg],
                url: "https://codepen.io/bexbrown/pen/KKeBqdb",
                image: EtchASketchImg
            },
            // {
            //     title: "Solar System Orbit",
            //     description: "This mini project is out of this world. A design challenge to create solar system orbits moving at a speed relative to their actual units.",
            //     techs: ["HTML", "CSS", "JavaScript"],
            //     icons: [HtmlImg, CssImg, JsImg],
            //     url: "https://codepen.io/bexbrown/pen/rNjvpMY",
            //     image: SolarSystemImg
            // }
        ]


    const [project, setProject] = useState(ProjectsInfo[0]);
    const [count, setCount] = useState(0);

    function handleLeftClick(event) {
        event.preventDefault();
        if (count === 0) {
            setCount(ProjectsInfo.length - 1);
            // setProject(ProjectsInfo[count]);
        } else {
            setCount(count - 1);
            // setProject(ProjectsInfo[count]);
        }
    }

    function handleRightClick(event) {
        event.preventDefault();
        if (count === ProjectsInfo.length - 1) {
            setCount(0);
            // setProject(ProjectsInfo[count]);
        } else {
            setCount(count + 1);
            // setProject(ProjectsInfo[count]);
        }
    }

    useEffect(() => {
        setProject(ProjectsInfo[count]);
    }, [count]);


    return (
        <section className="projects" id="projects">
            <div className="projects__header"></div>
            <div className="projects__container">
                <h2 className="projects__title">My Projects</h2>
                <div className="projects__content">
                    <img src={ArrowLeft} alt="left arrow" className="projects__arrow projects__arrow--left" onClick={handleLeftClick} />
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="projects__link">
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
                                            return <img src={icon} alt={project.techs[index]} className="projects__icon" key={uuidv4()} />
                                        })}
                                    </div>
                                </div>

                                <img className="projects__img" src={project.image} alt="project demo" />
                            </div>
                        </div>
                    </a>
                    <img src={ArrowRight} alt="right arrow" className="projects__arrow projects__arrow--right" onClick={handleRightClick} />
                </div>
            </div>
        </section>
    )
}

export default Projects;