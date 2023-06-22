import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"




export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>A baixo algumas das minhas habilidades que tive conhecimento e aplicação em alguns projetos<br></br> Busco a melhoria constante das minhas habilidades para sempre tentar me manter no topo.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter3} alt="Img" />
                                    <h5>.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Img" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Img" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Img" />
                                    <h5>SQL Server</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Img" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Img" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
      )
}