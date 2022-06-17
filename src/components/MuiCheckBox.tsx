import {Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material';
import React, {useState} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const MuiCheckBox = () => {

    const [acceptTnC, setAcceptTnC] = useState(false);

    const [skills, setSkills] = useState<string[]>([]);

    // console.log(acceptTnC);
    // console.log(skills);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    }

    const changeSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
       const index = skills.indexOf(event.target.value);
       if(index === -1) { //if index does not exist
            setSkills([...skills, event.target.value]);
       }
       else {
           setSkills(skills.filter((skill) => skill !== event.target.value));
       }
    };

  return (

    <Box>

        <Box>
            <FormControlLabel label='I accept these terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} size='small' color='success'/>} />
        </Box>

        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} />
        </Box>

        <Box>
            <FormControl>
                <FormLabel error>Select your skill: </FormLabel>
                <FormGroup row>
                    <FormControlLabel label='HTML' value='html' control={<Checkbox checked={skills.includes('html')} onChange={changeSkills}/>} />
                    <FormControlLabel label='CSS' value='css' control={<Checkbox checked={skills.includes('css')} onChange={changeSkills}/>} />
                    <FormControlLabel label='Javascript' value='javascript' control={<Checkbox checked={skills.includes('javascript')} onChange={changeSkills}/>} />
                </FormGroup>
                <FormHelperText>Please select at least one skill</FormHelperText>
            </FormControl>
        </Box>

    </Box>

  )

};

export default MuiCheckBox;