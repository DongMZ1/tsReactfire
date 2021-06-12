import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Topheader =() =>{
    return<>
    <AppBar position="static" color="transparent">
        <Toolbar>
            <Typography variant="h6">Material UI with Reactfire for Messageboard</Typography>
        </Toolbar>
    </AppBar>    
    </>
}

export default Topheader;