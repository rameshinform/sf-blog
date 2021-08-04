import React from "react";
import BlogAppBar from "./app-bar";
import Box from '@material-ui/core/Box';
const BlogLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <BlogAppBar />
      <Box component="div">
      {children}
      </Box>
    </div>
  );
};
export default BlogLayout;
