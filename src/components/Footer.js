import { Container, Row, Col} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                   <Col sm={16} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/caick-tanan-03086b180/"><img src={navIcon1} alt="linkedin" /></a>
                            <a href="https://www.facebook.com/caick_tanan/"><img src={navIcon2}  alt="facebook"/></a>
                            <a href="https://www.instagram.com/caick_tanan/"><img src={navIcon3}  alt="instagram"/></a>
                        </div>
                        <p>CopyRight 2023. Todos os direitos reservados</p>
                   </Col>
                </Row>
            </Container>
        </footer>
    )
}