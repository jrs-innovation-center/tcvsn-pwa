import React from "react";
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import FolderIcon from "material-ui-icons/Folder";
import EllipsisIcon from "material-ui-icons/MoreVert";
import Divider from "material-ui/Divider";
import { Link } from "react-router-dom";

const ResourceItem = resource => {
  return (
    <div key={resource._id}>
      <Link to={`/resources/${resource._id}`}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
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
  );
};
export default ResourceItem;
