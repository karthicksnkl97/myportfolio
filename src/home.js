import "./home.css"
import profilePicture from "./assets/20240211_100321 (3).png"
import gitHubIcon from "./assets/github.png"
import linkedInIcon from "./assets/Linkedin.png"
function Home(){
    return(
        <div id="home" className="home-data">
            <div>
                <img className="profile-img" src={profilePicture} alt="karthick" />
            </div>
            <div>
            <div className="profile-data">
                <div><p className="color-dim">Hello, I'm</p></div>
                <div><h1>Karthick K</h1></div>
                <div><p className="color-dim2">Frontend Developer</p></div>
                <div className='btn-home'>
                    <button className="btn-download">Download CV</button>
                    <button className="btn-download1">Contact Info</button>
                </div>
                

                </div>
                <div className="social-media">
                    <ul>
                        <li><img className="github" src={gitHubIcon} alt="icons" /> </li>
                        <li><img className="linkedin" src={linkedInIcon}  alt="icons"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Home;