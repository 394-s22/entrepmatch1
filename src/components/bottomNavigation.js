import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState, useEffect } from 'react';

const NavigationBar = ( ) => {

    var [value, setValue] = useState(window.location.pathname);

    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={2}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            >
            <BottomNavigationAction label="Profiles" component={Link} to="/profiles" icon ={<PeopleIcon/>}  value='/profiles' />
            <BottomNavigationAction label="Likes" component={Link} to="/likes" icon={<FavoriteIcon />}  value='/likes'/>
            <BottomNavigationAction label="Matches" component={Link} to="/matches" icon ={<InsertEmoticonIcon/>}  value='/matches' />
            <BottomNavigationAction label="Settings" component={Link} to="/settings" icon={<SettingsIcon/>} value='/settings' />
            </BottomNavigation>
        </Paper>
        );
};

export default NavigationBar;