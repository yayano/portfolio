const Education = () => {
  return (
    <div className="education-class">
      <div className="designe">
        <h1>Education & Certificate</h1>
        <img src="education.svg" alt="edu" />
      </div>
      <div class="education">
        <ul className="school">
          <li className="school-master">
            <img src="bac1.jpg" alt="" srcset="" />
            <div className="edu-text">
              <h1>Bachelor of Science 2012</h1>
              <br />
              <div class="content">
                <p>Experimental Science</p>
              </div>
            </div>
          </li>
          <li className="school-master">
            <img src="license.jpg" alt="" srcset="" />
            <div className="edu-text">
              <h1>License of Science 2016</h1>
              <div class="content">
                <h2>Computer Systems</h2>
                <p>Saad Dahleb University</p>
                <h3>Title of end of studies Project</h3>

                <p>
                  Selection of the best replica server in CDN (Content Delivery
                  Network)
                </p>
              </div>
            </div>
          </li>
          <li className="school-master">
            <img src="master.jpg" alt="" srcset="" />
            <div className="edu-text">
              <h1>Master of Science 2018</h1>
              <div class="content">
                <h2>computer systems and networks</h2>
                <p>Saad Dahleb University</p>
                <h3>Title of end of studies Project</h3>
                <p>
                  Improvement of the quelity of experience in video streaming
                  services in a MEC(Mobile Edge Computing) Architecture
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Education;
