import Skills from './Skills';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="profile-picture">
          <img src="/self.JPG" alt="self" />
        </div>
        <h1>Hello</h1>
        <h2>I'm Yahia</h2>
        <br />
        <br />
        <p>Full stack web developper</p>
      </div>
      <Skills />
    </div>
  );
};
export default Home;
