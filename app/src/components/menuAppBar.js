import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import SearchIcon from 'material-ui-icons/Search'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 0,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

//  <Button color="contrast">Search</Button>
const MenuAppBar = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
            onClick={
              props.goBack ? props.lastPage(props.history) : props.toggleDrawer
            }
          >
            {props.goBack ? <GoBackIcon /> : <MenuIcon />}
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>

          <IconButton
            color="contrast"
            aria-label="Search"
            onClick={props.toggleDrawer}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapActionsToProps = (dispatch, getState) => ({
  toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' }),
  lastPage: history => e => {
    e.preventDefault()
    history.goBack()
  }
})

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
