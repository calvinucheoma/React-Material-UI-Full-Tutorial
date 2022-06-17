// import React from 'react'
import { Stack, Link } from "@mui/material";


const MuiLinks = () => {

  return (

    <Stack spacing={2} direction='row' m={4}>

        <Link href='#' variant='h4' underline='none'> Link1 </Link>
        <Link href='#' color='secondary' underline='hover'> Link2 </Link>

    </Stack>

  )

};

export default MuiLinks;