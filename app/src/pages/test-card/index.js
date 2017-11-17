import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import MenuAppBar from '../../components/menuAppBar'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import { connect } from 'react-redux'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <MenuAppBar title="Lizard" search={true} />
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://static.pexels.com/photos/20861/pexels-photo.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
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
