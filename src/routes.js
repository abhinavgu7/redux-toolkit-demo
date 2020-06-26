import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./features/posts/posts";
import PostDetail from "./features/postDetail/postDetail";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/post/:id">
          <PostDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;