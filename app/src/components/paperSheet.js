import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { map } from 'ramda'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  })
})

function typographyList(data) {
  let style = ''
  if (data.style === 'italic') {
    style = data.style
  }

  return (
    <Typography
      type="body1"
      component="p"
      paragraph={data.bottomMargin}
      className={style}
    >
      {data.text}
    </Typography>
  )
}

function PaperSheet(props) {
  const { classes, data } = props

  return (
    <div>
      <Paper className={classes.root} elevation={4} square>
        {map(typographyList, data)}
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
