import React, {useState} from 'react'
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';



const MuiChip = () => {

     const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

     const handleDelete = (chipToDelete: string) => {
        setChips(chips.filter((chip) => chip !==  chipToDelete ))
     };

  return (

    <Stack direction='row' spacing={1}>

        <Chip label='Chip' color='primary' size='small'/>
        <Chip label='Chip outlined' color='secondary' variant="outlined"/>
        <Chip label='Chip avatar' color='success' variant="outlined" avatar={ <Avatar> CU </Avatar> }/>
        <Chip label='Chip click' color='success' icon={<FaceIcon />} onClick={() => alert('clicked')} />
        <Chip label='Chip delete' color='error' onClick={() => alert('clicked')} onDelete={() => alert('Delete handler called')}/>

        {
            chips.map((chip) => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))
        }
    </Stack>

  )

};

export default MuiChip;