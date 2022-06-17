import React, {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle } from "@mui/material"


const MuiDialog = () => {

    const [open, setOpen] = useState(false);

  return (

    <>

        <Button onClick={() => setOpen(true)}>Open Dialog</Button>

        <Dialog 
            aria-labelledby="dialog-title" 
            aria-describedby="dialog-description"
            open={open}
            onClose={() => setOpen(false)}
            >
            <DialogTitle id='dialog-title'>Submit the form?</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'> 
                    Are you sure you want to submit the form? 
                    You won't be able to undo
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
            </DialogActions>
        </Dialog>

    </>

  )

};

export default MuiDialog;