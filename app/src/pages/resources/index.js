import React from "react";
import withRoot from "../../components/withRoot";
import withDrawer from "../../components/withDrawer";
import MenuAppBar from "../../components/menuAppBar";
import { Typography } from "material-ui";

const Resources = props => {
  return (
    <div>
      <MenuAppBar title="Resources" search={true} />
      <Typography>Resources</Typography>
    </div>
  );
};

export default withRoot(withDrawer(Resources));
