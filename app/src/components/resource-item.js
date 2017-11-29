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
import {
  not,
  isNil,
  slice,
  toUpper,
  contains,
  head,
  drop,
  compose,
  toLower,
  join,
  split
} from 'ramda'

const ResourceItem = resource => {
  const removeArticles = arrData =>
    contains(head(arrData), ['the', 'a', 'an']) ? drop(1, arrData) : arrData
  return (
    <div key={resource._id}>
      <Link to={`/resources/${resource._id}`} className="router-link">
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              {compose(
                toUpper(),
                slice(0, 1),
                join(' '),
                removeArticles,
                split(' '),
                toLower()
              )(resource.name)}
            </Avatar>
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
