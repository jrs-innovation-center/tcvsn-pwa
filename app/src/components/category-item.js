import React from 'react'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import FolderIcon from 'material-ui-icons/Folder'
import EllipsisIcon from 'material-ui-icons/MoreVert'
import Divider from 'material-ui/Divider'

const CategoryItem = props => {
  return (
    <div>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.data.name}
          secondary={props.data.shortDesc}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="More">
            <EllipsisIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  )
}

export default CategoryItem
