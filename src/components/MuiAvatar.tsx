// import React from 'react'
import { Stack, Avatar, AvatarGroup } from "@mui/material";


const MuiAvatar = () => {

  return (

    <Stack spacing={4}>

        <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
                <Avatar sx={{bgcolor: 'primary.light'}}>CU</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>BU</Avatar> 
                <Avatar sx={{bgcolor: 'primary.light'}}>FU</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>DU</Avatar>
            </AvatarGroup>
        </Stack>

        <Stack direction='row' spacing={1}>
            <AvatarGroup >
                <Avatar sx={{bgcolor: 'primary.light'}}>SU</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>IU</Avatar> 
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg"  alt='Jane Doe'/>
                <Avatar src="https://randomuser.me/api/portraits/men/51.jpg"  alt='John Doe'/>
            </AvatarGroup> 
       </Stack>

        <Stack direction='row' spacing={1}>
             <Avatar variant="square" sx={{bgcolor: 'primary.light', width: 48, height: 48}}>MU</Avatar>
             <Avatar variant="rounded" sx={{bgcolor: 'success.light', width: 48, height: 48}}>UU</Avatar> 
        </Stack>
       

    </Stack>

  )

};

export default MuiAvatar;