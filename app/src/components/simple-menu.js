import React from "react";
import Button from "material-ui/Button";
import Menu, { MenuItem } from "material-ui/Menu";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <IconButton
          aria-owns={this.state.open ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Icon>keyboard_arrow_down</Icon>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
