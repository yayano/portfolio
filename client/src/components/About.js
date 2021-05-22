import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="about">
      <img src="yaya.jpg" alt="aboutme" />
      <div className="about-text">
        <h1>Hello,</h1>
        <h2>A bit about me :</h2>

        <div className="links">
          <Link to="/">My Resume</Link>
          <Link to="/projects">My Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
        <p>
          Hello! My name is Yahia. I think that I have not done justice to my
          potential in academics. I am a good friend and try to help In whatever
          way I can. I willingly take responsibilities given to me, perform
          effectively and do the best.
        </p>
      </div>
    </div>
  );
};
export default About;
