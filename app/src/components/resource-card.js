import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import FolderIcon from 'material-ui-icons/Folder'
import MenuAppBar from '../components/menuAppBar'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import { connect } from 'react-redux'

const styles = {
  card: {
    maxWidth: '100%'
  },
  cardHeader: {
    fontSize: '16px'
  },
  media: {
    height: '40vh'
  }
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://static.pexels.com/photos/20861/pexels-photo.jpg"
          title="Contemplative Reptile"
        />
        <CardHeader
          classes={{
            title: classes.cardHeader
          }}
          avatar={
            <Avatar aria-label="Resource">
              <FolderIcon />
            </Avatar>
          }
          title={props.data.formalName}
          subheader={props.data.shortDesc}
        />
        <CardContent>
          <Typography component="p">{props.data.purpose}</Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

//export default withStyles(styles)(SimpleMediaCard);
export default withRoot(withDrawer(withStyles(styles)(SimpleMediaCard)))
