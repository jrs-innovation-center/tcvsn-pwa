import React from "react";
import withRoot from "../../components/withRoot";
import withDrawer from "../../components/withDrawer";
import MenuAppBar from "../../components/menuAppBar";
import { Typography, List } from "material-ui";
import { connect } from "react-redux";
import { map } from "ramda";
import CategoryItem from "../../components/category-item";

const Categories = props => {
  return (
    <div>
      <MenuAppBar title="Categories" search={true} />
      <Typography />
      <List style={{ marginTop: 8 }}>
        {map(CategoryItem, props.categories)}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return { categories: state.categories };
};

const connector = connect(mapStateToProps);

export default withRoot(withDrawer(connector(Categories)));
