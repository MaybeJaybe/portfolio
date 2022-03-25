// import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <a href="https://maybejaybe.github.io/react-tetris/">Tetrist</a>
                </li>
                <li>
                    <a href="https://maybejaybe.github.io/FEW1.2-final-project/">Animals of History</a>
                </li>
                <li>
                    <a href="https://maybejaybe.github.io/INT1.3-slide-block-puzzle/">Slidey Blocks</a>
                </li>
                <li>
                    <a href="https://maybejaybe.github.io/INT1.2-raffle-app/">Raffl.it</a>
                </li>
                <li>
                    <a href="https://maybejaybe.github.io/FEW1.2-breakout-game/">Breakout Game</a>
                </li>
            </ul>
        </div>
    )
}

export default Projects