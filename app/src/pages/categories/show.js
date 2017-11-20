import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  ResourceCard,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import InboxIcon from "material-ui-icons/Inbox";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
//import Chevron_left from " material-ui-icons/Chevron_left";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import withRoot from "../../components/withRoot";
import withDrawer from "../../components/withDrawer";
import MenuAppBar from "../../components/menuAppBar";
import { connect } from "react-redux";
import { setCurrentCategory } from "../../action-creators/categories";
import { prop, path, split, compose, last } from "ramda";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 194
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  flexGrow: {
    flex: "1 1 auto"
  }
});

class ShowCategory extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    const pathID = prop("match")(this.props)
      ? path(["match", "params", "id"])(this.props)
      : compose(last, split("/"), path(["location", "pathname"]))(this.props);
    this.props.getCategory(pathID);
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { category } = this.props;
    console.log("ShowCategory props category:", category);
    return (
      <div>
        <MenuAppBar
          title="Resource"
          search={true}
          goBack={true}
          {...this.props}
        />
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
}
const mapStateToProps = state => {
  return { category: state.category };
};
const mapActionToProps = (dispatch, getState) => {
  return {
    getCategory: id => dispatch(setCurrentCategory(id))
  };
};

const connector = connect(mapStateToProps, mapActionToProps);
export default withRoot(withDrawer(connector(ShowCategory)));
