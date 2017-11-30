import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Menu from './menu'
import { withReducer, compose } from 'recompose'

const styles = theme => ({
  root: {},
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

const MyAppBar = ({ open, title, classes, dispatch }) => (
  <div>
    <Menu open={open} onRequestClose={() => dispatch({ type: 'TOGGLE' })} />
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          onClick={e => dispatch({ type: 'TOGGLE' })}
          className={classes.menuButton}
          color="contrast"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

const drawerReducer = withReducer(
  'open',
  'dispatch',
  (state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return !state
      default:
        return state
    }
  },
  false
)

const enhance = compose(withStyles(styles), drawerReducer)

export default enhance(MyAppBar)
