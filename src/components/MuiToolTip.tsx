// import React from 'react'
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const MuiToolTip = () => {

  return (

    <div>

        <Tooltip title='Delete' placement='right-start' arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>

    </div>

  )

};

export default MuiToolTip;