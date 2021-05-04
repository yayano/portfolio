import Skills from './Skills';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="profile-picture">
          <img src="/self.JPG" alt="self" />
        </div>
        <h1>Design</h1>
        <h2>Develop & Deploy</h2>
        <br />
        <br />
        <p>UX Designer & web developper based in Algeria</p>
      </div>
      <Skills />
    </div>
  );
};
export default Home;
