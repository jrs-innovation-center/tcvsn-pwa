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
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import { not, isNil } from 'ramda'

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
  avatarColor: {
    backgroundColor: '#607d8b'
  }
}

function SimpleMediaCard(props) {
  const websiteButton = not(isNil(props.data.website)) ? (
    <Button dense color="primary" href={props.data.website} target="_blank">
      Website
    </Button>
  ) : null
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
            <Avatar
              aria-label="Resource"
              classes={{
                colorDefault: classes.avatarColor
              }}
            >
              {props.data.name.substr(0, 1).toUpperCase() || ''}
            </Avatar>
          }
          title={props.data.formalName}
          subheader={props.data.shortDesc}
        />
        <CardContent>
          <Typography component="p">{props.data.purpose}</Typography>
        </CardContent>
        <CardActions>{websiteButton}</CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

// export default withStyles(styles)(SimpleMediaCard);
export default withRoot(withDrawer(withStyles(styles)(SimpleMediaCard)))
