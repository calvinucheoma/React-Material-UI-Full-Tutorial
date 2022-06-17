import React, {useState} from 'react';
import {Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MuiRatings = () => {

    const [value, setValue] = useState<number | null>(null);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    };

    // console.log({value});

  return (

    <Stack spacing={2}>

        <Rating 
            size='large' 
            value={value} 
            onChange={handleChange} 
            precision={0.5} 
            icon={<FavoriteIcon fontSize='inherit' color='error'/>} 
            emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} 
            // readOnly
            highlightSelectedOnly
        />

    </Stack>

  )

};

export default MuiRatings;