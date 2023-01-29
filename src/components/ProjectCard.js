import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, desc1, desc2, imgUrl, dataAos }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" data-aos={dataAos}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc1}</span><br/>
          <span>{desc2}</span>
        </div>
      </div>
    </Col>
  )
}
