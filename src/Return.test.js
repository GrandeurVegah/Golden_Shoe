import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import Products from "./components/Returns";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={history}>
      <Products />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
