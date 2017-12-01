import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import InboxIcon from 'material-ui-icons/Inbox'
import Icon from 'material-ui/Icon'

import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'

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
  const { currentCategory } = props
  return (
    <div key={currentCategory._id}>
      <Card style={{ marginBottom: 32 }}>
        <CardHeader
          avatar={
            <Avatar aria-label={currentCategory.icon}>
              <Icon>{currentCategory.icon}</Icon>
            </Avatar>
          }
          title={`${currentCategory.name}`}
          subheader={`${currentCategory.shortDesc}`}
        />

        <CardContent>
          <Typography component="p">{`${currentCategory.desc}`}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

// export default withStyles(styles)(SimpleMediaCard);
export default withRoot(withDrawer(withStyles(styles)(SimpleMediaCard)))
