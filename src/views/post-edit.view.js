import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from "@material-ui/icons/Delete";
import { InputLabel, FormControl, Divider } from '@material-ui/core';
import Input from "@material-ui/core/Input";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Grid, } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { apiService } from "../services";
import { useStyles } from "../helpers";

import { withRouter, useParams, NavLink } from "react-router-dom";


export const PostEditView = (props) => {
  const [data, setData] = React.useState([]);
  const { history } = props;
  const classes = useStyles();
  const { postId } = useParams();
  React.useEffect(() => {
    fetchData();
  }, [postId]);

  const fetchData = async () => {
    const post = await apiService.getPostDetail(postId);
    console.log(post);
    if (!!post) setData(post);
  };
  const onBack = () => {
    //const {history}=props;
    history.push('/');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: postId,
      title: event.target.title.value,
      text: event.target.text.value,
    }
    console.log(data.title);
    apiService.editPost(data)
      .catch((err) => console.log(err))
      .then(setTimeout(() => history.replace('/'), 700));
  }

  const onDelete = (id) => { };

  const { id, title, text } = data;
  return (
    <Container maxWidth="sm">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="title">Title</InputLabel>
      <FormControl fullWidth className={classes.margin} variant="outlined">
          {/* <InputLabel htmlFor="post-title">Title</InputLabel> */}
        <TextField
          id='title'
          variant="outlined" 
          multiline
          rowsMax='1'
          defaultValue={data.title}
        />
         </FormControl>
        <br />
        <InputLabel htmlFor="text">Text</InputLabel>
        <FormControl fullWidth className={classes.margin} variant="outlined">
         
        <TextField
          id='text'
          multiline
          rowsMax='14'
          rows={4}
          variant="outlined" 
          defaultValue={data.text}
        />
        </FormControl>
        <br />
        <Divider light />
        <Button variant="contained" color="primary" className={classes.button} startIcon={<SaveIcon />}
          type='submit'> Save </Button>


        <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}
          onClick={() => history.replace('/')}> Cancel </Button>
      </form>
      
    </Container >
)
};

