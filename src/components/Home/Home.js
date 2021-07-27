import Container from "react-bootstrap/Container";
import classes from "./Home.module.css";
import logo from "../../assets/atlan.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "atomize";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";




const Home = () => {

  return (
  
    <div className = {classes.home}>  
      <Navbar>
        <div className = {classes.home__navbar__brand}>
          <Link to="/" style={{color:"#000", textDecoration: 'none'}}><img src={logo}  className = {classes.home__navbar__brand__logo} alt="atlan" />
          {/* <span style={{ fontWeight: "700" }}> SQL </span> Editor */}
          </Link>
        </div>
        <div style={{ fontSize: "1.7rem", paddingTop: "10px", paddingRight: "30px"}} className="ml-auto">
          <Nav>
            <Nav.Link href="https://github.com/Vishv07/SQL-Editor" target="_blank">
              <i className = {"fab fa-github " + classes.home__navbar__icons}></i>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <Container className="text-center" style={{marginTop:"-100px"}}>
        <div>
          <h1 className = {classes.home_h1_text}>
            A SQL editor view to query  ⚡  easily on a table using SQL🧠 
            {/* <span className={classes.home_span_gradient}>
              <br/>
              Database Diagrams{" "}
            </span>
            🚀 */}
          </h1>
        </div>
        <br />
        {/* <h2><span className = {classes.home_h2_text}>
          Say Hi 👋 to the No Code Era
          </span>
        </h2> */}
        <br />
        <Row>
              <Col sm={{ size: 'auto', offset: 1 }} className = {classes.home_button_col}>
                <Link to="/Editor" style = {{textDecoration: 'none'}}>
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                  >                   
                      SQL Editor   
                  </Button>
                </Link>
                    
                {/* <Link to="/aboutus" style = {{textDecoration: 'none'}}>                      
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                    // onClick={addNewNode}
                  >About Us &nbsp; <i className={"fas fa-info-circle"}></i>
                  </Button>
                </Link> */}
              </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Home;