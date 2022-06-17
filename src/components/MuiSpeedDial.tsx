// import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';

const MuiSpeedDial = () => {

  return (

    <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{position: 'absolute', bottom:'16px', right:'16px'}}
        icon={<SpeedDialIcon openIcon={<EditIcon/>} />}
    >
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen />
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' tooltipOpen/>

    </SpeedDial>

  )

};

export default MuiSpeedDial;