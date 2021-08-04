import React from "react";
import { Link } from "react-router-dom";
import {Swal} from 'sweetalert2';

import moment from "moment";
import { Paper, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

import  {useStyles}  from "../helpers";

export const PostItem = ( { data, onDelete }) => {
  
  const { id, title, text, timestamp } = data;
  const classes = useStyles();

  const confirmDeletion = () => {
   
      
     onDelete && onDelete(id);

  };

  return (
    <div>
      <p className="post_title" cols="10">
        <b>
          <span className="post-preview">
            {title.length > 25 ? `${title.substr(0, 150)}...` : title}
          </span>
        </b>
        &nbsp;&nbsp;&nbsp;
        <span className="post_datestamp text-right">
          <b> {moment(timestamp).format('MMM DD, YYYY')}</b>
        </span>
      </p>
      <Divider light />
      <p className="post_body">
        <span className="post-preview">
          {text.length > 300 ? `${text.substr(0, 300)}...` : text}
        </span>
      </p>
      <Divider light />

     

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
        component={Link}
        to={`/posts/${id}`}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => { confirmDeletion() }}
      >
        Delete
      </Button>
    </div>
  );
};
