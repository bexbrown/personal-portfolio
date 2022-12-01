import "./About.scss";
import { useState } from "react";
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

function About() {

    const [selected, setSelected] = useState(null);

    function handleTextClick(event) {
        event.preventDefault();
        console.log(event.target.id)
        setSelected(event.target.id);
    }

    function handleIconClick(event) {
        event.preventDefault();
        console.log(event.target.id);
        setSelected(event.target.id);
    }


    return (
        <section className="about" id="about">
            <div className="about__content">
                <h2 className="about__title">About Me</h2>
                <p className="about__text">Hello! My name is Rebecca and I enjoy creating beautiful websites and intuitive digital experiences. I am currently living in Toronto, Canada and have had the opportunity to live in 7+ countries this past decade.  I love exploring the world and the web.</p>
                <p className="about__text">I began my web development journey in 2016, creating simple static websites with HTML and CSS.  As my passion grew, so did my skillset. I continued learning online through tutorials, courses and projects, all of which prepared me to tackle the challenge of a Software Engineering Bootcamp.  I enjoy all stages of developing websites and am eager to continue creating and collaborating.</p>
                <p className="about__text">Some things that I like are accessibility, equality, inclusivity, sustainability, organization, pixel-perfection, intuitiveness, design, fashion, food, nature & the sky.</p>
                <h3 className="about__technologies">The technologies I am currently using are...</h3>
                <ul className="about__list">
                    <li className="about__item" onClick={handleTextClick} id="html-text" >HTML</li>
                    <li className="about__item" onClick={handleTextClick} id="css-text" >CSS</li>
                    <li className="about__item" onClick={handleTextClick} id="javascript-text" >JavaScript</li>
                    <li className="about__item" onClick={handleTextClick} id="react-text" >React</li>
                    <li className="about__item" onClick={handleTextClick} id="node-text" >Node</li>
                    <li className="about__item" onClick={handleTextClick} id="express-text" >Express</li>
                    <li className="about__item" onClick={handleTextClick} id="typescript-text" >TypeScript</li>
                    <li className="about__item" onClick={handleTextClick} id="mysql-text" >MySQL</li>
                    <li className="about__item" onClick={handleTextClick} id="git-text" >Git</li>
                    <li className="about__item" onClick={handleTextClick} id="github-text" >Github</li>
                    <li className="about__item" onClick={handleTextClick} id="jest-text" >Jest</li>
                    <li className="about__item" onClick={handleTextClick} id="figma-text" >Figma</li>
                </ul>
                <div className="about__icons">
                    <img className="about__icon" onClick={handleIconClick} src={HtmlImg} alt="html logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={CssImg} alt="css logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={JsImg} alt="javascript logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={ReactImg} alt="react logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={NodeImg} alt="node logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={ExpressImg} alt="express logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={TypescriptImg} alt="typescript logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={MySqlImg} alt="my sql logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={GitImg} alt="git logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={GitHubImg} alt="github logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={JestImg} alt="jest logo"  />
                    <img className="about__icon" onClick={handleIconClick} src={FigmaImg} alt="figma logo"  />
                </div>
            </div>
        </section>
    )
}

export default About;