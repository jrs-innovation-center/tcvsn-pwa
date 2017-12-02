import React from 'react'
import { Drawer } from 'material-ui'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/Inbox'
import HomeIcon from 'material-ui-icons/Home'
import HelpIcon from 'material-ui-icons/Help'
import ViewList from 'material-ui-icons/ViewList'
import FavoriteIcon from 'material-ui-icons/Favorite'
import LockOutlineIcon from 'material-ui-icons/LockOutline'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GavelIcon from 'material-ui-icons/Gavel'
import Auth from '../auth'
const auth = new Auth()

const sideList = (
  <div>
    <List>
      <Link to="/" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/resources" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
      </Link>
      <Link to="/categories" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <Link to="/about" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
      <Link to="/legal" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary="Legal" />
        </ListItem>
      </Link>
      <Link to="/in-memory" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="In Memory" />
        </ListItem>
      </Link>
      <Divider />
      {auth.isAuthenticated() ? (
        <Link to="/logout" className="router-link">
          <ListItem button>
            <ListItemIcon>
              <LockOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      ) : (
        <Link to="/login" className="router-link">
          <ListItem button>
            <ListItemIcon>
              <LockOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </Link>
      )}
    </List>
  </div>
)

const withDrawer = function(PageComponent) {
  const WrapDrawerComponent = props => {
    return (
      <div>
        <PageComponent {...props} />
        <Drawer open={props.open} onRequestClose={props.toggleDrawer}>
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
