import React from "react";
import { apiService } from "../services";
import { PostItem, PostPastItem } from "../components";
import Swal from 'sweetalert2';
import { Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import  {useStyles}  from "../helpers";

export const PostListView = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const posts = await apiService.getAllPost().catch((err) => console.log(err));

    if (!!posts) setData(posts);
  };
  const onCreate = () => {
    history.push("/posts/0");
  };
  const onDelete = async(id) => {
    
     Swal.fire({
                title: 'Confirm Delete this blog entry?',
                text: "This action can not be canceled. Are you sure you would like to delete this entry?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
          }).then(async (result) => {
            if (result.value) {
              await apiService.deletePost(id);
              fetchData();
              Swal.fire(
                    'Press OK to back',
                    'The post has been deleted',
                    'success'
                );
            }
          });
  };
  const renderItems = () => {
    if (data) {
      return (
        <Grid container spacing={5}>
          <Grid item xs={3}>
          {/* <List> <ListItem alignItems="flex-start"  component={Link}
    to={`/post`}><ListItemText>Create New Post</ListItemText>
</ListItem></List> */}

<Button variant="contained" color="primary" className={classes.button} startIcon={<AddIcon />}
    onClick={() => history.replace('/post')}> Create New Post </Button>

            {data.map((o, i) => (
              <PostPastItem key={i} data={o} onCreate={onCreate} />
            ))}
          </Grid>
          <Grid item xs={9}>
            {data.map((o, i) => (
              <PostItem key={i} data={o} onDelete={onDelete} />
            ))}
          </Grid>
        </Grid>
      );
    } else return <div>No posts yet.</div>;
  };

  return renderItems();
};
