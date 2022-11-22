import "./Contact.scss";

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">Keep in touch</h2>
            <ul className="contact__list">
                <a href="https://www.linkedin.com/in/bexbrown/"><li className="contact__item">LinkedIn</li></a>
                <a href="https://github.com/bexbrown"><li className="contact__item">GitHub</li></a>
                <a href="https://codepen.io/bexbrown"><li className="contact__item">CodePen</li></a>
            </ul>
        </section>
    )
}

export default Contact;