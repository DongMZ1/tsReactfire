import logo from "./logo.svg";
import React, {useState, useEffect} from 'react'
import "./App.css";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'; 

//components
import Topheader from "./component/Wrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 10,
      color: '#fff',
    },
  }),
);
const App = () => {
  const [open, setopen] = useState(true);
  const classes = useStyles();
  useEffect(
    ()=>{
      setTimeout(
        ()=>{setopen(false);},1000
      )
        
    },[]
    
  )
  return(
    <>
    <div>
    <Backdrop className={classes.backdrop} open={open}>
  <CircularProgress color="inherit" />
    </Backdrop>
    </div>
    <Topheader />
    </>
  )
}

export default App;
