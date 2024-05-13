import "./skills.css"
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
function Skills() {
    return (
        <div id="skills" className="skills">
            <h1 className="skills-my">Skills</h1>
            <div className="skills-border">
                <h3>Frontend Developer</h3>
                <div className="skills-section">
                    <div className="skills-col">
                        <ul>
                            <li><CheckBoxRoundedIcon /></li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><CheckBoxRoundedIcon /></li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="skills-section1">
                    <div className="skills-col">
                        <ul>
                            <li><CheckBoxRoundedIcon /></li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><CheckBoxRoundedIcon /></li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;