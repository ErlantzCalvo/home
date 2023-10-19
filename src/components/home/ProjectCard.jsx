import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = ({project}) =>{
    return(
        <Card style={{'width': '18em'}}>
            <a href={project.url} target=" _blank" className="silent-link">
                <Card.Img variant="top" src={"/home/projects/" + project.image} alt={project.name} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
            </a>

        </Card>
    );
};

export default ProjectCard;