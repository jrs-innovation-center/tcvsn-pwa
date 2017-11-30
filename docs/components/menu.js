import React from 'react'
import Typography from 'material-ui/Typography'
import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import NavLink from './navlink'
import menuData from '../menu'
import { map } from 'ramda'

const styles = theme => ({
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  },
  drawerHeader: theme.mixins.toolbar,
  drawerTitle: {
    paddingLeft: 16,
    paddingTop: 16,
    color: 'silver'
  }
})

const createLink = ({ text, url }) => (
  <NavLink key={url} text={text} url={url} />
)

const Menu = ({ classes, open, onRequestClose }) => (
  <Drawer open={open} onRequestClose={onRequestClose}>
    <div className={classes.drawerHeader}>
      <Typography className={classes.drawerTitle} type="title">
        Menu
      </Typography>
    </div>
    <Divider />
    <div onClick={onRequestClose}>
      <List>{map(createLink, menuData.main)}</List>
    </div>
    <Divider />
    <div onClick={onRequestClose}>
      <List>{map(createLink, menuData.sub)}</List>
    </div>
  </Drawer>
)

export default withStyles(styles)(Menu)
