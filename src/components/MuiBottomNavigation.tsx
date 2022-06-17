import React, {useState} from 'react'
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';


const MuiBottomNavigation = () => {

    const [active, setActive] = useState(0);

  return (

    <BottomNavigation 
        sx={{width:'100%', position:'absolute', bottom:0}}
        value={active}
        onChange={(event, newValue) => setActive(newValue)}
        showLabels
        >

        <BottomNavigationAction label='Home' icon={<HomeIcon/>} />
        <BottomNavigationAction label='Favorite' icon={<FavoriteIcon/>} />
        <BottomNavigationAction label='Profile' icon={<PersonIcon/>} />


    </BottomNavigation>

  )

};

export default MuiBottomNavigation;