import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';
import React, {useState} from 'react';

const MuiRadioButton = () => {

    const [value, setValue] = useState('');

    // console.log(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    };

  return (

    <Box>
        <FormControl id='job-experience-group-label' error>
            <FormLabel>Years of experience:</FormLabel>
            <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio size='small' color='success'/>} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio/>} label='6-8' value='6-8' />
                <FormControlLabel control={<Radio/>} label='9-11' value='9-11' />
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>

  )

};

export default MuiRadioButton;