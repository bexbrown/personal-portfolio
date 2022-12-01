import "./Contact.scss";
import LinkedInImg from '../../assets/icons/linkedin.png';
import GitHubImg from '../../assets/icons/github.png';
import CodePenImg from '../../assets/icons/codepen.png';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__header"></div>


            <h2 className="contact__title">Keep in touch</h2>
            <ul className="contact__list">
                <a href="https://www.linkedin.com/in/bexbrown/" target="_blank" rel="noopener noreferrer" className="contact__link">
                    <img src={LinkedInImg} alt="linkedin logo" className="contact__icon" />
                    <li className="contact__item">LinkedIn</li>
                </a>
                <a href="https://github.com/bexbrown" target="_blank" rel="noopener noreferrer" className="contact__link">
                    <img src={GitHubImg} alt="github logo" className="contact__icon" />
                    <li className="contact__item">GitHub</li>
                </a>
                <a href="https://codepen.io/bexbrown" target="_blank" rel="noopener noreferrer" className="contact__link">
                    <img src={CodePenImg} alt="codepen logo" className="contact__icon" />
                    <li className="contact__item">CodePen</li>
                </a>
            </ul>

        </section>
    )
}

export default Contact;