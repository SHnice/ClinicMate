import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

function NavBars() {
  const { data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <div className="navStick">
      <ToastContainer />
      <Navbar expand="lg" style={{padding:"0"}}>
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <div className="d-flex" style={{alignItems:'center'}}>
            <img src={Logo} title="logo" alt="img" width={100} height={70} />
            <h2 className="navLogo mt-3">Clinic Mate</h2>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/ourteam"} className="nav-link">
                Doctors
              </Link>

              <Link to={"/service"} className="nav-link">
                Services
              </Link>

              <Link to={"/team"} className="nav-link">
                Our Team
              </Link>
             
              
              <a href="https://clinic-mates.vercel.app/" className="nav-link">
                <button type="button">
                  Portal
                  <span>
                    <IoIosArrowForward />
                  </span>
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
