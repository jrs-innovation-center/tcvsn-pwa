import React from 'react'
import { withRouter } from 'react-router-dom'

import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import ResourceMenuItem from './resource-item-menu'

import {
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

const ResourceItem = ({ resource, history }) => {
  const removeArticles = arrData =>
    contains(head(arrData), ['the', 'a', 'an']) ? drop(1, arrData) : arrData
  return (
    <div key={resource._id}>
      <ListItem
        button
        onClick={e => {
          history.push(`/resources/${resource._id}`)
        }}
      >
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
        <ListItemText primary={resource.name} secondary={resource.shortDesc} />
        <ResourceMenuItem
          website={resource.website}
          phone={resource.primaryPhone}
        />
      </ListItem>

      <Divider />
    </div>
  )
}
export default withRouter(ResourceItem)
