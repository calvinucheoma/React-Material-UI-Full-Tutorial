// import React from 'react'
import { Stack, LinearProgress, CircularProgress } from "@mui/material";


const MuiProgress = () => {

  return (

    <Stack spacing={2}>

        <CircularProgress color='success'/>
        <CircularProgress variant="determinate" value={70}/>
        <LinearProgress/>
        <LinearProgress variant="determinate" value={70}/>

    </Stack>

  )

};

export default MuiProgress;