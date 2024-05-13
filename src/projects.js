import { projects_lists } from "./assets/assets";
import "./projects.css"
function Projects() {
    return (
        <div id="projects">
            <h1 className="project-name">Projects</h1>
            <div className="projects">
                {projects_lists && projects_lists.length ? projects_lists.map((item, index) => {
                    return (
                        <div className="projects-border" key={index}>
                            <img className="projects-cover" src={item.image} alt="projects" />
                            <div className="project-title">
                                <p>{item.projectName}</p>
                            <button className="project-btn">GitHub ➤</button>
                            </div>
                            
                        </div>
                    )


                }) : projects_lists && !projects_lists.length ? <p>Loading</p> : <p>No Data</p>}
               
            </div>
        </div>
    )
}
export default Projects;