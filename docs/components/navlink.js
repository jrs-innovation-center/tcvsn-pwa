import React from 'react'

import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'

const NavLink = ({ text, url }) => (
  <Link to={url} style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemText primary={text} />
    </ListItem>
  </Link>
)

export default NavLink
