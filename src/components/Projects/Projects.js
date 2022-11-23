import "./Projects.scss";
import {useState, useEffect} from 'react';

function Projects() {

    let ProjectsInfo = 
         [
        {
            title: "Sea Bound",
            description: "Sea Bound is an interactive game highlighting the effects of plastic waste on the ocean ecosystems.  Basic features include some cool interesting impressive features which I built. Other Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
            tech: ["HTML", "CSS", "React", "MySQL", "Node", "Express"],
            // icons: []
        },
        {
            title: "Matching Game",
            description: "Test your memory with this colour matching game. Try to find all matches in the fewest possible attempts.There are some interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
            tech: ["HTML", "CSS", "React", "MySQL", "Node", "Express"],
            // icons: []
        },
        {
            title: "Video Player Website",
            description: "A Mock youtube video player.  Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
            tech: ["HTML", "CSS", "React", "MySQL", "Node", "Express"],
            // icons: []
        },
        {
            title: "Etch-a-Sketch",
            description: "Sketch out some awesome designs on this classic toy. Basic features include some cool interesting impressive features which I built. Other Basic features include some cool interesting impressive features which I built. Basic features include some cool interesting impressive features which I built.",
            tech: ["HTML", "CSS", "React", "MySQL", "Node", "Express"],
            // icons: []
        }
    ]
    

    const [project, setProject] = useState(ProjectsInfo[0]);
    const [count, setCount] = useState(0);

    function handleLeftClick(event) {
        event.preventDefault();
        if (count === 0) {
            setCount(3);
        } else {
            setCount(count -1);
        }
    }   

    function handleRightClick(event) {
        event.preventDefault();
        if (count === 3 ) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }

    useEffect(() => {
        setProject(ProjectsInfo[count]);
    },[count]);


    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">My Projects</h2>
            <div className="projects__content">
                <button className="projects__arrow projects__arrow--left" onClick={handleLeftClick}>(</button>
                <div className="projects__card projects__card--visible">
                    <h4 className="projects__subtitle">{project.title}</h4>
                    <p className="projects__description">{project.description}</p>
                    <div className="projects__bottom">
                        <div className="projects__tech">
                            <ul className="projects__list">
                                <li className="projects__item">HTML</li>
                                <li className="projects__item">CSS</li>
                                <li className="projects__item">React</li>
                                <li className="projects__item">MySQL</li>
                                <li className="projects__item">Node</li>
                                <li className="projects__item">Express</li>
                            </ul>
                            <div className="projects__icons">
                                <div>O</div>
                                <div>O</div>
                                <div>O</div>
                                <div>O</div>
                                <div>O</div>
                                <div>O</div>
                            </div>
                        </div>

                        <div className="projects__img"></div>
                    </div>
                </div>
          
                <button className="projects__arrow projects__arrow--right" onClick={handleRightClick}>)</button>
            </div>
        </section>
    )
}

export default Projects;