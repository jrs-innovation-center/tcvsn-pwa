import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar'
import List, { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List'
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
  split,
  map
} from 'ramda'

const removeArticles = arrData =>
  contains(head(arrData), ['the', 'a', 'an']) ? drop(1, arrData) : arrData

const abbr = compose(
  toUpper(),
  slice(0, 1),
  join(' '),
  removeArticles,
  split(' '),
  toLower()
)

const CategoryResources = props => {
  return (
    <List>
      {map(
        resource => (
          <Link
            key={resource._id}
            to={`/resources/${resource._id}`}
            style={{ textDecoration: 'none' }}
          >
            <ListItem button>
              <ListItemAvatar>
                <Avatar>{abbr(resource.name)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={resource.name}
                secondary={resource.shortDesc}
              />
            </ListItem>
          </Link>
        ),
        props.categoryResources
      )}
    </List>
  )
}

export default CategoryResources
