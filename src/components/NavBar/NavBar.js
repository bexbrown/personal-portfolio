import "./NavBar.scss";
import Flower from "../../assets/icons/flower.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav">
            <a href="#profile" className="nav__link nav__link--profile">RB</a>
            <ul className="nav__links">
                <a href="#about" className="nav__link">
                    <li className="nav__item">About</li>
                    </a>
                <a href="#projects" className="nav__link">
                    <li className="nav__item">Projects</li>
                    </a>
                <a href="#contact" className="nav__link">
                    <li className="nav__item">Contact</li>
                    </a>
            </ul>
        </nav >
    )
};

export default NavBar;