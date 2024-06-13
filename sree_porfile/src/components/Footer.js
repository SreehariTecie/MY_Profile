import { Container, Row, Col } from "react-bootstrap";
import arrowUp from "../assets/img/arrow-up.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <button class="bi bi-arrow-up-square">TOP</button>
          </Col>

          <Col size={16} sm={14} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sreehari-v/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="#https://github.com/SreehariTecie">
                <img src={navIcon2} alt="Github" />
              </a>
              <a href="https://www.instagram.com/sreehari____v/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
