
import {PostListView} from '../views';
import { PostEditView } from "../views/post-edit.view";
import { PostAddEditView } from "../views/post-new.view";

export const PostRoutes= {
  posts : '/',
  postEdit:'/posts/:postId',
  postCreate:'/post'
}


const publicRoutes = {

  items: [
    {
      path: PostRoutes.posts,
      name: "Posts",
      component: PostListView,
    },
    {
      path: PostRoutes.postEdit,
      name: "Edit Post",
      component: PostEditView,
    },
    {
      path: PostRoutes.postCreate,
      name: "Create Post",
      component: PostAddEditView,
    },
  ],
};
export const BlogLayoutRoutes = [
  publicRoutes
];
