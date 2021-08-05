import React, {  } from 'react';
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { apiService } from '../services';
import { InputLabel, FormControl } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import  {useStyles}  from "../helpers";

const PostAddEditView = (props) => {
    const {history}=props;
    
  const classes = useStyles();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {title: event.target.title.value,
                    text: event.target.text.value,
                    }
      apiService.createPost(data)
      .catch((err) => console.log(err))
      .then(setTimeout(() => history.replace('/'), 700) );
     
    //   axios.post('/api/post/posttodb', data)
    //     .then(response => console.log(response))
    //     .catch((err) => console.log(err))
    //     .then(setTimeout(() => history.replace('/'), 700) )
    }
  
  
      return(
        <Container maxWidth="sm">
            <h1>Create New Post</h1>
        <div>
             <Box component="div">
          <form onSubmit={handleSubmit}>
              
          <InputLabel htmlFor="title">Title</InputLabel>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <TextField
              id='title'
              variant="outlined" 
              />  </FormControl>
            <br />
            
          <InputLabel htmlFor="text">Text</InputLabel>
            <FormControl fullWidth className={classes.margin} variant="outlined">
            <TextField
              id='text'
              variant="outlined" 
              multiline
              rows={4}
              />  </FormControl>
             <br />
             <Button variant="contained" color="primary" className={classes.button} startIcon={<SaveIcon />}
        type='submit'> Save </Button>
         <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}
    onClick={() => history.replace('/')}> Cancel </Button>
             {/* <button type='submit'> Submit </button> */}
             </form>
            
          {/* <button onClick={() => history.replace('/')}> Cancel </button> */}
          
          </Box>
        </div>
        </Container>
    )
}

export { PostAddEditView };