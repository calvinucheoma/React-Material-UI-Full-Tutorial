import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const MuiNavbar = () => {

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorElement);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

  return (

    <AppBar position='static'>

        <Toolbar>
            
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemonIcon/>
            </IconButton>

            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    POKEMON GO
            </Typography>

            <Stack direction='row' spacing={2}>
                    <Button color='inherit'> Home </Button>
                    <Button color='inherit'> About </Button>
                    <Button color='inherit'> Features </Button>
                    <Button 
                        color='inherit' 
                        id='resources-menu' 
                        onClick={handleClick} 
                        aria-control={open? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open?'true':undefined}
                        endIcon={<KeyboardArrowDownIcon/>}
                    > 
                        Resources 
                    </Button> 
                    <Button color='inherit'> Pricing </Button>
            </Stack>

            <Menu 
                id='resources-menu' 
                anchorEl={anchorElement} 
                open={open}
                MenuListProps={{
                    "aria-labelledby": 'resources-menu'
                }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuItem onClick={handleClose}> Blog </MenuItem>
                <MenuItem onClick={handleClose}> Podcast </MenuItem>
            </Menu>
            
        </Toolbar>

    </AppBar>

  )

};

export default MuiNavbar;