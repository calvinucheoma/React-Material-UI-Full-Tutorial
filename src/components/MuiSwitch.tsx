import React, {useState} from 'react';
import {Box, FormControlLabel, Switch, FormControl, FormLabel, FormHelperText, FormGroup} from '@mui/material';

const MuiSwitch = () => {

    const [checked,setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    // console.log(checked);

  return (

    <Box>

        <Box>
            <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success' />}/>
        </Box>

        <Box>
            <FormControl>
                    <FormLabel>Toggle Between Modes </FormLabel>
                    <FormGroup row>
                        <FormControlLabel label='Light' value='light' control={<Switch />} />
                        <FormControlLabel label='Dark' value='dark' control={<Switch />} />
                        <FormControlLabel label='Ambient' value='ambient' control={<Switch />} />
                    </FormGroup>
                    <FormHelperText>Toggle Between Any Mode</FormHelperText>
            </FormControl>
        </Box>

    </Box>
  )

};

export default MuiSwitch;