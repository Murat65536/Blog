import "./top.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Top() {
    return (
        <div className="top">
            <div className="topLeft">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                </ul>
            </div>
            <div className="topRight">
                <a href="https://github.com/Murat65536" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Top;