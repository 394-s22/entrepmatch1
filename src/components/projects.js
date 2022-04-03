

export const ProjectsList = ({ projects }) => (
    <div>
      
    { Object.values(projects).map(project => <Project key={project.name} project={ project } />) }
    </div>
    
  );
  
  const Project = ({ project }) => (
    <div class="project_container">
      <p><b>{project.name}</b></p>
      <p>Project Description: {project.projectDescription}</p>
      
      <p>Team Size: {project.teamSize}</p>
      <p>Project Duration: {project.projectDuration}</p>
      <p>Greatest Moment: {project.greatestMoment}</p>
      <a href={project.projectLink}><p>Project link: {project.projectLink}</p></a>
      
    </div>
  );
  