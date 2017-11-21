import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import FolderIcon from "material-ui-icons/Folder";
import InboxIcon from "material-ui-icons/Inbox";
import Icon from "material-ui/Icon";
import MenuAppBar from "../components/menuAppBar";
import withRoot from "../components/withRoot";
import withDrawer from "../components/withDrawer";
import { connect } from "react-redux";

const styles = {
  card: {
    maxWidth: "100%"
  },
  cardHeader: {
    fontSize: "16px"
  },
  media: {
    height: "40vh"
  }
};

function SimpleMediaCard(props) {
  const { category } = props;
  return (
    <div key={category._id}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe">
              <Icon>{category.icon}</Icon>
            </Avatar>
          }
          title={`${category.name}`}
          subheader={`${category.shortDesc}`}
        />

        <CardContent>
          <Typography component="p">{`${category.desc}`}</Typography>
        </CardContent>

        <CardActions disableActionSpacing>
          <Button raised>
            Resources
            <InboxIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(SimpleMediaCard);
export default withRoot(withDrawer(withStyles(styles)(SimpleMediaCard)));
