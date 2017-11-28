import React from 'react'
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
import { Link } from 'react-router-dom'

const ResourceItem = resource => {
  return (
    <div key={resource._id}>
      <Link to={`/resources/${resource._id}`} className="router-link">
        <ListItem button>
          <ListItemAvatar>
            <Avatar>{resource.name.substr(0, 1).toUpperCase() || ''}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={resource.name}
            secondary={resource.shortDesc}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="More">
              <EllipsisIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Link>
      <Divider />
    </div>
  )
}
export default ResourceItem
