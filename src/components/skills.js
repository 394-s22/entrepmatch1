import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SkillsList = ({ skills }) => (
    <div>
    { 
      Object.values(skills).map(skill => <Skill skill={ skill } />)    
    }</div>
    
  );
export const Skill = ({ skill }) => (
    <div className="container">
      <ListGroup.Item>{skill}</ListGroup.Item>
    </div>
  );

