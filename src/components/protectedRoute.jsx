import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../store/auth";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const currentUser = useSelector(getCurrentUser);
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        if (!currentUser)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            ></Redirect>
          );
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
