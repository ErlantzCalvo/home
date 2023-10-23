import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = ({project}) =>{
    return(
        <Col lg={4} md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Img variant="top" src={"/home/projects/" + project.image} alt={project.name} />
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <CardButton project={project} />
                    </Card.Body>
            </Card>
        </Col>
    );
};

const CardButton = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <a href={project.url} className="btn btn-outline-secondary mr-3" target=" _blank">
          <i className="fas fa-external-link-alt" /> Visit
        </a>
        <Button className="btn btn-secondary" onClick={() => setShowModal(true)}>
          <i className="fas fa-code" /> Details
        </Button>
        <TechnicalInfoModal project={project} showModal={showModal} setShowModal={setShowModal} />
        </>
    );
  };

const TechnicalInfoModal = ({project, showModal, setShowModal}) => {
    return (
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="technical-details-modal">
            
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                   {project.name} Technical details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {project.technical_details.split('\n').map((paragraph, idx) => (
                    <p key={project.name + '_td_' + idx}>{paragraph}</p>
                ))}
                
                <hr />
                <StackInformation stack={project.stack} />
                
            </Modal.Body>
        </Modal>
    );
};

const StackInformation = ({stack}) => {
    return (
        <div className="pb-3">
            <h5>Technologies used</h5>
            {
                stack.map((language) => (
                    <span key={'_tech_' + language} className="badge badge-light card-link">{language}</span>
                ))
            }
        </div>
    );
}

export default ProjectCard;