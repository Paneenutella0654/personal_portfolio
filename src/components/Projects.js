import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import photoImg1 from "../assets/img/photoImg1.jpg";
import photoImg2 from "../assets/img/photoImg2.jpg";
import photoImg3 from "../assets/img/photoImg3.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const coding = [
    {
      title: "Autolavaggio",
      description: "Database development for managing a car wash",
      imgUrl: projImg1,
      Url:"https://github.com/Paneenutella0654/Autolavaggio.git",
    },
    {
      title: "MGCG",
      description: "E-Commerce Projectof spare parts for cars",
      imgUrl: projImg2,
      Url:"https://github.com/Paneenutella0654/MGCG_TSW.git",
    },
    {
      title: "Temp",
      description: "Design & Development",
      imgUrl: projImg3,
      Url:"https://www.google.com",
    },
  ];

  const photo = [
    {
      title: "Manarola",
      description: "Database development for managing a car wash",
      imgUrl: photoImg1,
    },
    {
      title: "Riomaggiore",
      description: "E-Commerce Projectof spare parts for cars",
      imgUrl: photoImg2,
    },
    {
      title: "Calitri",
      description: "Design & Development",
      imgUrl: photoImg3,
    },
  ];

  const grafic = [
    {
      title: "Logo",
      description: "Database development for managing a car wash",
      imgUrl: projImg1,
    },
    {
      title: "Logo",
      description: "E-Commerce Projectof spare parts for cars",
      imgUrl: projImg2,
    },
    {
      title: "Concpet",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Progetti</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Coding</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Photograph</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Graphic</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> 
                    <Tab.Pane eventKey="first">   
                      <Row>
                        {
                          coding.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">   
                      <Row>
                        {
                          photo.map((project, index) => {  //TODO Aggiungere la funzione che mi consete di aprire la foto in un altra pagina 
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">   
                      <Row>
                        {
                          grafic.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
