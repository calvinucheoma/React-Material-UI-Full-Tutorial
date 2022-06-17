import { Box, TextField, MenuItem } from "@mui/material";
import React, {useState} from 'react';

const MuiSelect = () => {

    const [countries, setCountries] = useState<string[]>([]);

    // console.log(countries);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }

  return (

    <Box width='250px'>

        <TextField 
            label='Select Countries' 
            select 
            value={countries} 
            onChange={handleChange} 
            fullWidth 
            SelectProps={{multiple:true}}
            size='small'
            color="success"
            helperText='Please select your countries'
          >
            <MenuItem value='NG'>Nigeria</MenuItem>
            <MenuItem value='BN'>Burundi</MenuItem>
            <MenuItem value='JM'>Jamaica</MenuItem>
            <MenuItem value='MW'>Malawi</MenuItem>
        </TextField>


    </Box>

  )

};

export default MuiSelect;