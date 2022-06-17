// import React, {useState} from 'react'
import {Box, Divider, Stack, Grid, Paper} from '@mui/material';

const MuiLayout = () => {

  return (

    <Paper sx={{padding: '5px'}} elevation={4}>

      <Stack sx={{border: '1px solid black'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}> 
          <Box /*component='span' */ sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                  backgroundColor: 'primary.light',
              },
          }}>
              Wadup!
          </Box>

          <Box display='flex' width='100px' height='100px' bgcolor='success.light' p={2}>
              Hello!
          </Box>
      </Stack>

      <Grid container my={4} spacing={2} columnSpacing={2} rowSpacing={4}>
        <Grid item xs={6} xl={12}> <Box bgcolor='primary.light' p={3}>Item 1</Box> </Grid>
        <Grid item xs={6} xl='auto'> <Box bgcolor='primary.light' p={3}>Item 2</Box> </Grid>
        <Grid item xs={6} xl={12} > <Box bgcolor='primary.light' p={3}>Item 3</Box> </Grid>
        <Grid item xs={6} xl={12}> <Box bgcolor='primary.light' p={3}>Item 4</Box> </Grid>
      </Grid>

    </Paper>
  )

};

export default MuiLayout;