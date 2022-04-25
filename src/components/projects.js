import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { ListItemText } from '@mui/material';

export const ProjectsList = ({ projects }) => (
  <Stack spacing={1}>
      
    { Object.values(projects).map(project => <Project key={project.name} project={ project } />) }
    </Stack>
    
  );
  
  const Project = ({ project }) => (
    <Box sx={{width:"100%", border: 1, paddingLeft: "4px", borderRadius:2}}>
    <List >
      <ListItemText primary={project.name} />
          <ListItemText secondary= {"Project Description: " + project.projectDescription} />
          <ListItemText secondary= { "Team Size: " + project.teamSize}  />
          <ListItemText secondary={"Project Duration: " + project.projectDuration } />
          <ListItemText secondary={"Greatest Moment: " + project.greatestMoment }  />

      {/* <ListGroup.Item><a href={project.projectLink}>Project link: {project.projectLink}</a></ListGroup.Item> */}
    </List>
    </Box>
  );
  