import React from 'react';
import {useStyles} from './headerStyle'
import { Button} from "@material-ui/core";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';


const Header = ({change,value,search}) => {

  const classes = useStyles();
  return (
   <>
   
   <div  className={classes.search} >
    
   <span  className={classes.span}>search</span>
      <div><input type='text' name='search' placeholder='search...' value={value}    className={classes.input} onChange={change} /></div>
      <Button  onClick={search} variant="contained"color="secondary" 
      className={classes.button} startIcon={< ImageSearchIcon/>}>
      search
      </Button>
    
      </div></>
  )
}

export default Header