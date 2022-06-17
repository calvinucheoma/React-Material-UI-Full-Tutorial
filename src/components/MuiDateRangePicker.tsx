import {useState} from 'react';
import { Box, TextField } from '@mui/material';
import { DateRangePicker, DateRange} from '@mui/lab';


const MuiDateRangePicker = () => {

    const [value, setValue] = useState<DateRange<Date | null>>([null, null]);
    // console.log(value);


  return (

    <Box width='500px'>

        <DateRangePicker 
            startText='Check-in' 
            endText='Check-out' 
            value={value}
            onChange={(newValue: any)=> {
                setValue(newValue);
            }}
            renderInput={(startProps: any, endProps: any) => (
                <>
                    <TextField {...startProps} />
                    <Box sx={{mx: 2}}> to </Box>
                    <TextField {...endProps} />
                </>
            )}
        />

    </Box>

  )

};

export default MuiDateRangePicker;