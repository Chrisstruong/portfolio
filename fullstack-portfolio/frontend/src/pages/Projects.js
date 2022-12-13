import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  async function getProjectsData() {
    try {
      const response = await fetch('./projects.json')
      const data = await response.json()
      setProjects(data)
    } catch (err) {
      console.log(err)
    }
  }

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData()
  }, [])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="Projects">
      <br />
      <div className="ProjectsInfo">
        <div>
          <img src={projects[0].image} alt="" id="ProjectPic1" />
        </div> 
        <h2>{projects[0].name}</h2>
        <p>{projects[0].content}</p>
        <h3>Technologies Index</h3>
        <p>HTML, CSS, JavaScript.</p>
        <div className="aa">
          <a href={projects[0].repo}><button>Repo</button></a>
          <a href={projects[0].liveApp}><button>Visit Live App</button></a>
        </div>
      </div>

      <div className="ProjectsInfo">
        <div>
          <img src={projects[1].image} alt="" id="ProjectPic2" />
        </div> 
        <h2>{projects[1].name}</h2>
        <p>{projects[1].content}</p>
        <h3>Technologies Index</h3>
        <p>React, CSS, Flexbox.</p>
        <div className="aa">
          <a href={projects[1].repo}><button>Repo</button></a>
          <a href={projects[1].liveApp}><button>Visit Live App</button></a>
        </div>
      </div>
      
    </div>
  );

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;