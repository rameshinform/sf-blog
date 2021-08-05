import React from 'react';
import {Link} from 'react-router-dom';

import moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';


export const PostPastItem=({data,onCreate})=>{
    const {id, title, timestamp} = data;
    const titleElipsis =   title.length > 15 ? `${title.substr(0, 15)}...` : title;
    const elpased=moment(timestamp).fromNow();
   return (
   
    <List //className={classes.root}
   >
      {/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
        component={Link}
        to={`/posts`}
      >
        Edit
      </Button> */}
    

    <ListItem alignItems="flex-start"  component={Link}
        to={`/posts/${id}`}>
     
      <ListItemText
        primary={titleElipsis}
        secondary={
          <React.Fragment>
           
            {elpased}
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider />
    </List>)
     
    }


