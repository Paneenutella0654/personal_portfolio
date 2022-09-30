import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={Url}><h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
 // Nel Indirizzamento mettere la possibita di aprire la pagine in un altra scheda in modo da non rimuovere il sito