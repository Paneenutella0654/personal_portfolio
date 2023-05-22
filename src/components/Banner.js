import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Back-end Developer", "Photographer" ];   //Per Cambiare le cose che cambiano ci cambiano qui 
  const period = 1500;   // tempo necessario per cancellare la scitta
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !isVisibleOnce) {
      setIsVisibleOnce(true);
      // Esegui le azioni che desideri quando la proprietà diventa visibile una volta
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility onChange={handleVisibilityChange}>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Benvenuti nel mio Portfolio</span>
                <h1>{`Hi! I'm Gerardo`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Back-end Developer", "Photographer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>21 years old, living in Campania, I am a junior developer and a photographer. I program and make photos because it is the language with which I love to tell my clients' stories. I would like to bring the modern language of the web combined with the tradition of photographs to create unique concepts both photographic but also programming that can excite the people who look at them.</p>
                  <a href="#connect"><button onClick={() => console.log('connect')}>Contattami <ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility onChange={handleVisibilityChange}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
