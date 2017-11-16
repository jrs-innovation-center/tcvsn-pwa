import React from "react";
import { Button } from "material-ui";
import withRoot from "../components/withRoot";
import withDrawer from "../components/withDrawer";
import MenuAppBar from "../components/menuAppBar";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div>
      <MenuAppBar title="Home" />
    </div>
  );
};

const connector = connect(
  state => state,
  dispatch => {
    return {
      toggleDrawer: () => dispatch({ type: "TOGGLE_DRAWER" })
    };
  }
);
export default withRoot(withDrawer(connector(Home)));
