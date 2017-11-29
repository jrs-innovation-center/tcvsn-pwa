import React from 'react'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'

import EllipsisIcon from 'material-ui-icons/MoreVert'
import Divider from 'material-ui/Divider'
import Icon from 'material-ui/Icon'
import CategoryMenu from './category-item-menu'
import history from '../history'

const CategoryItem = props => {
  const menuItemActions = [
    {
      name: 'View Resources',
      link: null,
      fn: null
    },
    {
      name: 'Details',
      link: `/categories/${props._id}`,
      fn: null
    }
  ]
  return (
    <div key={props._id}>
      <ListItem
        button
        onClick={e => {
          e.preventDefault()
          history.push(`/categories/${props._id}`)
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <Icon>{props.icon ? props.icon : 'add_circle'}</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.shortDesc} />

        <ListItemSecondaryAction>
          <IconButton aria-label="More">
            <CategoryMenu actions={menuItemActions} {...this.props} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  )
}

export default CategoryItem
