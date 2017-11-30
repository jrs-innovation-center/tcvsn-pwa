import React from 'react'
import Collapse from 'material-ui/transitions/Collapse';
import {withStyles} from 'material-ui/styles'
import Card, {CardActions, CardContent, CardMedia, CardHeader} from 'material-ui/Card'
import {connect} from 'react-redux'
import Avatar from 'material-ui/Avatar'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import {ListItemText} from 'material-ui/List'
import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';
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
  pathOr
} from 'ramda'

const styles = {
  card: {
    maxWidth: '100%'
  },
  cardHeader: {
    fontSize: '16px'
  },
  media: {
    height: '40vh'
  },
  content: {
    flex: '1 0 auto'
  },
  controls: {
    display: 'flex'
  },
  avatarColor: {
    backgroundColor: '#607d8b'
  }
}

function removeArticles(arrData) {
  return contains(head(arrData), ['the', 'a', 'an'])
    ? drop(1, arrData)
    : arrData
}

class ActionCard extends React.Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
    console.log("the expaned state:", this.state.expanded)
  };

  render() {
    const {classes} = this.props
    const websiteButton = pathOr(null, [
      'data', 'website'
    ], this.props)
      ? (
        <Button dense color="primary" href={this.props.data.website} target="_blank">Website
        </Button>
      )
      : null
    return (
      <div>
        <Card className={classes.card} style={{
          marginBottom: 32
        }}>
          <CardMedia
            className={classes.media}
            image="http://i.cubeupload.com/aEVXss.jpg"
            title="Static Map"/>
          <CardActions>
            <IconButton aria-label="Add to favorites">
              <Avatar
                aria-label="Resource"
                classes={{
                colorDefault: classes.avatarColor
              }}>
                {compose(toUpper(), slice(0, 1), join(' '), removeArticles, split(' '), toLower())(this.props.data.name)}
              </Avatar>
            </IconButton>
            <ListItemText
              primary={this.props.data.formalName}
              secondary={this.props.data.shortDesc}/>

            <IconButton
              aria-label="Show more"
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}>
              <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>

              <Typography paragraph>
                {this.props.data.purpose}
              </Typography>

            </CardContent>
          </Collapse>
          <CardActions>{websiteButton}</CardActions>
        </Card>
      </div>
    )
  }
}

// const connector = connect(state => state) export default
// withStyles(styles)(SimpleMediaCard);
export default withRoot(withDrawer(withStyles(styles)(ActionCard)))
