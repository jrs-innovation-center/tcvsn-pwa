import React from 'react'
import { Drawer } from 'material-ui'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import { connect } from 'react-redux'

const sideList = (
  <div>
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItem button component="a" href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  </div>
)

const withDrawer = function(PageComponent) {
  const WrapDrawerComponent = props => {
    return (
      <div>
        <PageComponent />
        <Drawer open={props.open}>
          <div
            tabIndex={0}
            role="button"
            onClick={props.toggleDrawer}
            onKeyDown={props.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
  const mapStateToProps = state => {
    return { open: state.drawer.open }
  }
  const mapActionsToProps = dispatch => {
    return {
      toggleDrawer: () => {
        dispatch({ type: 'TOGGLE_DRAWER' })
      }
    }
  }
  const connector = connect(mapStateToProps, mapActionsToProps)
  return connector(WrapDrawerComponent)
}

export default withDrawer
