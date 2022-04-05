
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProjectsList = ({ projects }) => (
    <div>
      
    { Object.values(projects).map(project => <Project key={project.name} project={ project } />) }
    </div>
    
  );
  
  const Project = ({ project }) => (
    <ListGroup variant="flush">
      <ListGroup.Item><b>{project.name}</b></ListGroup.Item>
      <ListGroup.Item>Project Description: {project.projectDescription}</ListGroup.Item>
      <ListGroup.Item>Team Size: {project.teamSize}</ListGroup.Item>
      <ListGroup.Item>Project Duration: {project.projectDuration}</ListGroup.Item>
      <ListGroup.Item>Greatest Moment: {project.greatestMoment}</ListGroup.Item>
      <ListGroup.Item><a href={project.projectLink}>Project link: {project.projectLink}</a></ListGroup.Item>
    </ListGroup>
  );
  