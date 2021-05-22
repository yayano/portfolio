import Skills from './Skills';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="profile-picture">
          <img src="/self.JPG" alt="self" />
        </div>
        <h1>Develop</h1>
        <h2>Build & Deploy</h2>
        <br />
        <br />
        <p>Full stack web developper based in Algeria</p>
      </div>
      <Skills />
    </div>
  );
};
export default Home;
