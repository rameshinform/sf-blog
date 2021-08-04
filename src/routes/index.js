import React from "react";
import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  BlogLayoutRoutes
} from "./paths";

import { BlogLayout} from "../layouts";
import { renderPublicRoutes } from "./route-utils";
const Routes = (props) => {

  return (
    <Router>
      <Switch>
        {renderPublicRoutes(BlogLayout, BlogLayoutRoutes)}
        
      </Switch>
    </Router>
  );
};

export default Routes;
