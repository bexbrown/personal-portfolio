import "./About.scss";
import HtmlImg from '../../assets/icons/html.png';
import CssImg from '../../assets/icons/css.png';
import JsImg from '../../assets/icons/js.png';
import ReactImg from '../../assets/icons/react.png';
import NodeImg from '../../assets/icons/node.png';
import ExpressImg from '../../assets/icons/express.png';
import MySqlImg from '../../assets/icons/mysql.png';
import GitImg from '../../assets/icons/git.png';
import FigmaImg from '../../assets/icons/figma.png';

function About() {

    // const [selected, setSelected] = useState(null);


    function handleIconEnter(event) {
        event.preventDefault();
        console.log(event.target.id);
        event.target.style.backgroundColor = "#fff";
    }

    function handleIconLeave(event) {
        event.preventDefault();
        event.target.style.backgroundColor = "#fff";
    }


    return (
        <section className="about" id="about">
            <div className="about__navbar"> &nbsp</div>
            <div className="about__content">
                <h2 className="about__title">About Me</h2>
                <p className="about__text">Hello! My name is Rebecca and I create interactive websites and intuitive digital experiences. I am currently living in Toronto, Canada and have had the opportunity to live in 7+ countries.  I love exploring the world and the web.</p>
                <p className="about__text">My web development journey began many years ago, creating simple static websites with HTML and CSS.  As my passion grew, so did my skillset. I continued self-learning through tutorials, courses and projects, all of which prepared me to tackle the challenge of a Software Engineering Bootcamp.  I enjoy all stages of designing and developing web applications.</p>
                <p className="about__text">Some things that I like are accessibility, inclusivity, sustainability, pixel-perfection, intuitiveness, design, fashion, food, nature & the sky.</p>
                <h3 className="about__technologies">The technologies I am currently using are...</h3>
                <ul className="about__list">
                    <li className="about__item" id="html-text" >HTML</li>
                    <li className="about__item" id="css-text" >CSS</li>
                    <li className="about__item" id="javascript-text" >JavaScript</li>
                    <li className="about__item" id="react-text" >React</li>
                    <li className="about__item" id="node-text" >Node</li>
                    <li className="about__item" id="express-text" >Express</li>
                    {/* <li className="about__item" id="typescript-text" >TypeScript</li> */}
                    <li className="about__item" id="mysql-text" >MySQL</li>
                    <li className="about__item" id="git-text" >Git</li>
                    {/* <li className="about__item" id="github-text" >Github</li> */}
                    {/* <li className="about__item" id="jest-text" >Jest</li> */}
                    <li className="about__item" id="figma-text" >Figma</li>
                </ul>
                <div className="about__icons">
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={HtmlImg} alt="html logo" />
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={CssImg} alt="css logo" />
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={JsImg} alt="javascript logo" />
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={ReactImg} alt="react logo" />
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={NodeImg} alt="node logo" />
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={ExpressImg} alt="express logo" />
                    {/* <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={TypescriptImg} alt="typescript logo" /> */}
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={MySqlImg} alt="my sql logo" />
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={GitImg} alt="git logo" />
                    {/* <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={GitHubImg} alt="github logo" /> */}
                    {/* <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={JestImg} alt="jest logo" /> */}
                    <img className="about__icon" onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} src={FigmaImg} alt="figma logo" />
                </div>
            </div>
        </section>
    )
}

export default About;