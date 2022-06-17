import React, {useState} from 'react';
import {Stack, Autocomplete, TextField} from '@mui/material';


const MuiAutocomplete = () => {

  const skills = ['HTML', 'CSS', 'Javascript', 'Java', 'React'];

  const [value,setValue] = useState<string | null>(null);

  // console.log({value});

  const handleChange = (event: any, newValue: string | null) => {
    setValue(newValue);
  };

  type Skill = {
    id: number,
    label: string,
  };

  const skillsOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
  }));

  const [skill, setSkill] = useState<Skill | null>(null);

  // console.log(skill);

  return (

    <Stack spacing={2} width='250px'>

        <Autocomplete 
          options={skills} 
          renderInput={(params) => <TextField {...params} label='Skills'  />}
          value={value} 
          onChange={handleChange} 
          freeSolo
        />

        <Autocomplete 
          options={skillsOption} 
          renderInput={(params) => <TextField {...params} label='Skills'  />}
          value={skill} 
          onChange={(event: any, newValue: Skill | null ) => setSkill(newValue)} 
        />

    </Stack>

  )

};

export default MuiAutocomplete;