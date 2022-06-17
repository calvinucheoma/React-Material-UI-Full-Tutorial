// import React from 'react'
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({theme})=> ({
  height: '250px',
  width:'250px',
  // backgroundColor: theme.status.danger,
  backgroundColor: theme.palette.neutral?.darker,
}));


const MuiResponsiveness = () => {

  return (

  <>

    <Box 
        sx={{
            height:'300px', 
            width:{
                xs: 100, // applies when viewport width is above 0
                sm: 200, // 600px and above
                md: 300, // 900 and above
                lg: 400, // 1200 and above
                xl: 500 // 1536 and above
            }, 
            m:'50px', 
            backgroundColor:'secondary.main'
           }}
        >
    </Box>
    <StyledBox />

  </>
  )

};

export default MuiResponsiveness;