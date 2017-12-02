import React from 'react'
import IconButton from 'material-ui/IconButton'
import { ListItemSecondaryAction } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import EllipsisIcon from 'material-ui-icons/MoreVert'
import { withRouter } from 'react-router-dom'

const ITEM_HEIGHT = 48

class ResourceMenuItem extends React.Component {
  state = {
    anchorEl: null
  }

  handleRequestClose = () => {
    //
    this.setState({ anchorEl: null })
  }
  render() {
    const open = Boolean(this.state.anchorEl)
    return (
      <ListItemSecondaryAction>
        <IconButton
          aria-label="More"
          onClick={event => {
            event.stopPropagation()
            this.setState({
              anchorEl: event.currentTarget
            })
          }}
        >
          <EllipsisIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={open}
          onRequestClose={this.handleRequestClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          <MenuItem
            onClick={event => {
              event.stopPropagation()
              window.open('tel:' + this.props.phone)
              this.handleRequestClose()
            }}
          >
            CALL
          </MenuItem>
          <MenuItem
            onClick={event => {
              event.stopPropagation()
              window.open('http://' + this.props.website)
              this.handleRequestClose()
            }}
          >
            WEBSITE
          </MenuItem>
          <MenuItem
            onClick={event => {
              event.stopPropagation()
              this.handleRequestClose()
            }}
          >
            CANCEL
          </MenuItem>
        </Menu>
      </ListItemSecondaryAction>
    )
  }
}

export default withRouter(ResourceMenuItem)
