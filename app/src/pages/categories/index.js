import React from "react";
import withRoot from "../../components/withRoot";
import withDrawer from "../../components/withDrawer";
import MenuAppBar from "../../components/menuAppBar";
import { Typography } from "material-ui";
import { connect } from "react-redux";
import { map } from "ramda";

const li = categories => {
  return (
    <li key={categories._id}>
      <Typography type="title">{categories.name}</Typography>
    </li>
  );
};

// props.resources === []
const Categories = props => {
  return (
    <div>
      <MenuAppBar title="Categories" search={true} />
      <Typography>Categories</Typography>
      <ul>{map(li, props.categories)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { categories: state.categories };
};

const connector = connect(mapStateToProps);

export default withRoot(withDrawer(connector(Categories)));
