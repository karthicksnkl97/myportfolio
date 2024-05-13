import "./about.css"
import profilePhoto from "./assets/20240211_100321 (2).jpg"
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
function About() {
    return (
        <div id="about" className="about-me">
            <h1 className="about">About Me</h1>
            <div className="about-section">
                <div><img className="profileimg" src={profilePhoto} alt="profilephoto" /></div>
                <div className="about-informtion">
                    <div className="about-education">
                    <div><SchoolRoundedIcon className="education-icon" /></div>
                        <div className="education">
                    <h2>Education</h2>
                    <p>B.E.EEE</p>
                    </div>
                   
                    </div>
                  
                    <p>Passionate Frontend Developer with expertise in crafting intuitive user
                        interfaces and seamless user experiences. Proficient in modern web
                        technologies such as React.js, HTML5, CSS3, and JavaScript. Dedicated to
                        delivering high-quality, responsive web applications that meet both
                        client needs and industry standards.</p>
                   

                </div>
            </div>
        </div>
    )
}
export default About;