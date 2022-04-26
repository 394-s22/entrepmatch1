import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const NavigationBar = () => {

return (
<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={2}>
        <BottomNavigation
        showLabels
        >
          <BottomNavigationAction label="Profiles" component={Link} icon ={<PeopleIcon/>} to="/profiles" />
          <BottomNavigationAction label="Likes" component={Link} icon={<FavoriteIcon />} to="/likes" />
          <BottomNavigationAction label="Matches" component={Link} icon ={<InsertEmoticonIcon/>} to="/matches" />
          <BottomNavigationAction label="Settings" component={Link} icon={<SettingsIcon/>} to="/settings" />
        </BottomNavigation>
      </Paper>
);

};

export default NavigationBar;