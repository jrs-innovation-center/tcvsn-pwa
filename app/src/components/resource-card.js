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
  split
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
  const removeArticles = arrData =>
    contains(head(arrData), ['the', 'a', 'an']) ? drop(1, arrData) : arrData
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://i.cubeupload.com/aEVXss.jpg"
          title="Static Map"
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
              {compose(
                toUpper(),
                slice(0, 1),
                join(' '),
                removeArticles,
                split(' '),
                toLower()
              )(props.data.name)}
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
