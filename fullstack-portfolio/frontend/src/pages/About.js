import { useState, useEffect } from "react";
import "../styles/portfolio.css"

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  async function getAboutData() {
    try {
      const response = await fetch('./about.json')
      const data = await response.json()
      setAbout(data)
    } catch (err) {
      console.log(err)
    }
  }

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData()
  }, [])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="About">
      <br />
      <br />
      <br />
      <div className="About2">
        <div>
          <img src={about.headshot} alt="" id="avatar" />
        </div>
        <h2 id="name">{about.name}</h2>
        <p>{about.bio}</p>
      </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;