import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ClassNames } from '@emotion/react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles((theme) => ({
  TextField : { 
    marginTop : '80px',
  },

  buttons : {
    display : "flex",
    justifyContent : "center",
    marginTop : "10px"
  }
}));

export default function Papers() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 900,
          height: 250,
        },
      }}
    >
      
      <Paper elevation={3} >
      <h1> Description</h1>
      <p>Light as a feather, there is nothing in it; the strongest man can't hold it for much more than a minute.</p>
      <TextField className = {classes.TextField}
          id="filled-textarea"
          label="Enter your answer here"
          placeholder="ahh yeah , hope you are correct !!!"
          multiline
          fullWidth
          variant="filled"
          width= "900"
        />
        <div className={classes.buttons} >

        <Button variant="contained" endIcon={<SendIcon />}>
        SUBMIT
      </Button>
        </div>
      </Paper>
      <Paper elevation={3} >
      <h1> Description</h1>
      <p>Light as a feather, there is nothing in it; the strongest man can't hold it for much more than a minute.</p>
      <TextField className = {classes.TextField}
          id="filled-textarea"
          label="Enter your answer here"
          placeholder="ahh yeah , hope you are correct !!!"
          multiline
          fullWidth
          variant="filled"
          width= "900"
        />
        <div className={classes.buttons} >

<Button variant="contained" endIcon={<SendIcon />}>
SUBMIT
</Button>
</div>
      </Paper>
      <Paper elevation={3} >
      <h1> Description</h1>
      <p>Light as a feather, there is nothing in it; the strongest man can't hold it for much more than a minute.</p>
      <TextField className = {classes.TextField}
          id="filled-textarea"
          label="Enter your answer here"
          placeholder="ahh yeah , hope you are correct !!!"
          multiline
          fullWidth
          variant="filled"
          width= "900"
        />
        <div className={classes.buttons} >

<Button variant="contained" endIcon={<SendIcon />}>
SUBMIT
</Button>
</div>
      </Paper>
      
    </Box>
  );
}