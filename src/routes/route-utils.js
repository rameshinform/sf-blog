
import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";


const renderRouteContainer = (Layout, Component, path, index) => (
  <Route
    key={index}
    path={path}
    exact
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const renderRoutes = (Layout, routes) => {
  if (!routes || routes.length == 0) return null;
  return routes.map(({ items, path: topPath, component: Component }, index) =>
    items
      ? items.map(({ path, component: Component }, index) =>
          //can also combine path like => ${topPath}${path}
          renderRouteContainer(Layout, Component, path, index)
        )
      : renderRouteContainer(Layout, Component, topPath, index)
  );
};
export const renderPublicRoutes = (Layout, routes) => {
  return renderRoutes(Layout, routes);
};
