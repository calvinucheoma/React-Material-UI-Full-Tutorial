import React from 'react';
import { Stack, Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


const MuiAlert = () => {

  return (

    <Stack spacing={2}>

        <Alert severity='warning'> Are you sure you want to submit?</Alert>
        <Alert severity='info'> Fill in your registration details</Alert>
        <Alert severity='success'>Congrats! Your form has been successfully submitted</Alert>
        <Alert severity='error'>Error! Please try again</Alert>

        <Alert variant='outlined'  severity='warning'> <AlertTitle>Warning Message</AlertTitle> Are you sure you want to submit?</Alert>
        <Alert variant='outlined'  severity='info'> <AlertTitle>Info Message</AlertTitle> Fill in your registration details</Alert>
        <Alert variant='outlined'  severity='success'> <AlertTitle>Success Message</AlertTitle> Congrats! Your form has been successfully submitted</Alert>
        <Alert variant='outlined'  severity='error'> <AlertTitle>Error Message</AlertTitle> Error! Please try again</Alert>

        <Alert variant='filled' severity='warning' action={<Button color='inherit' size='small'>Undo</Button>}> Are you sure you want to submit?</Alert>
        <Alert variant='filled' severity='info'> Fill in your registration details</Alert>
        <Alert variant='filled' severity='success' icon={<CheckIcon fontSize='inherit'/>}>Congrats! Your form has been successfully submitted</Alert>
        <Alert variant='filled' severity='error' onClose={() => alert('Close Alert')}>Error! Please try again</Alert>

    </Stack>


  )

};

export default MuiAlert;