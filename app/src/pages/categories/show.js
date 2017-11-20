import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
//import Chevron from " material-ui-icons/Chevron_left";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import withRoot from "../../components/withRoot";
import withDrawer from "../../components/withDrawer";
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
          <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">{`${category.desc}`}</Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div />
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
            in={this.state.expanded}
            transitionDuration="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph type="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
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
