import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PULZE_Blu.jpg";
import projImg2 from "../assets/img/Freedom-Mortgage.jpg";
import projImg3 from "../assets/img/optimal-dynamics.jpg";
import projImg4 from "../assets/img/health.jpg";
import projImg5 from "../assets/img/p&gwebsite.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "E-Commerce Website Application",
      description:
        "Elevate your shopping journey with seamless navigation and convenient features tailored to your needs.",
      imgUrl: projImg1,
    },
    {
      title: "Freedom Mortgage Banking Application",
      description:
        "Experience secure banking at your fingertips, with intuitive features designed to simplify your financial management.",
      imgUrl: projImg2,
    },
    {
      title: "Optimal Dynamics",
      description: "AI-Powered Solutions to Improve Your Trucking Operations.",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Physician Therapeutic Notes",
      description:
        "Group Notes functionality enhancement for Therapeutic Documentation MPage.",
      imgUrl: projImg4,
    },
    {
      title: "P&G Website Development",
      description:
        "Crafting a seamless online experience, P&G's website captivates with intuitive navigation and rich content, engaging visitors effortlessly.",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are a few past design projects I've worked on.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Section 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Section 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Section 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Will add projects soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
