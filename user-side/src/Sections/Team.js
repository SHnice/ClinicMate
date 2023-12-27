import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";
import areeb from "../Assets/areeb.png";
import saddam from "../Assets/saddam.png";
import rafey from "../Assets/rafey.png";
import NavBars from "./navbar";
import Footer from "./footer";
import yuvraj from "../Assets/yuvraj.jpg";
function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper mt-5">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member" style={{height:'450px'}}>
                <div className="team-media">
                  <img src={yuvraj} alt="img" style={{width:'100%', height:"100%"}} />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Yuvraj Sagar</h4>
                    <span className="text-secondary">MERN Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/centauricoder01"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rajendra01/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://centauricoder01.github.io/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            

            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member" style={{height:'450px'}}>
                <div className="team-media">
                  <img src={saddam} alt="img" style={{width:'100%', height:"100%"}} />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Saddam Hussain</h4>
                    <span className="text-secondary">Full Stack Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/centauricoder01"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rajendra01/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://centauricoder01.github.io/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member" style={{height:'450px'}}>
                <div className="team-media">
                  <img src={areeb} alt="img" style={{width:'100%', height:"100%"}} />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Areeb Ahmad</h4>
                    <span className="text-secondary">UI Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/centauricoder01"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rajendra01/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://centauricoder01.github.io/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member" style={{height:'450px'}}>
                <div className="team-media">
                  <img src={rafey} alt="img" style={{width:'100%', height:"100%"}} />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Abdul Rafey Farooqi</h4>
                    <span className="text-secondary">MERN Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/centauricoder01"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rajendra01/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://centauricoder01.github.io/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
