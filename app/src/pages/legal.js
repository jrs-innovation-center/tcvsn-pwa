import React from 'react'
import AppBar from 'material-ui/AppBar'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Card, {
  CardActions,
  CardHeader,
  CardContent,
  CardMedia
} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Gavel from 'material-ui-icons/Gavel'
import Help from 'material-ui-icons/Help'
import Favorite from 'material-ui-icons/Favorite'
import Legal from 'material-ui-icons/Gavel'
const styles = {
  card: {
    align: 'center',
    maxWidth: 345,
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  media: {
    height: 200
  }
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <MenuAppBar title="Legal" />
      <div style={{ width: '95%', margin: '0 auto' }}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar>
                <Gavel />
              </Avatar>
            }
            title="Legal"
            subheader="Disclaimer"
          />
          <CardContent>
            <Typography component="p">
              The organizations and individuals listed in this directory cannot
              and do not guarantee that they can provide assistance, but each of
              us are “committed” to doing everything within our charters and
              organizations, bylaws, governing Federal-State-Local laws and
              rules-regulations, and resolve to do whatever we can that is
              legal, moral, and ethical and within in our resources and
              approvals processes to help those in need. Everyone and every
              organization in this directory is devoted to trying to help our
              beloved wounded, ill, injured, and needy troops and disabled
              veterans, veterans, and their families.Although most of the
              services in this directory are free,some are not free.For example
              (and just one example) there are some co-pays for medications
              under hospice for Medicare covered hospice patients.However, all
              the organizations and individuals listed here are committed to
              help in every way possible and to make sure if there are any fees
              associated with their assistance that they are fully disclosed up
              front and before there are any charges accrued.New organizations
              that wish to become a member of the Tri-County Veteran Support
              Network may submit contact information, mission statement, and
              website address (if applicable) via e-mailto tim@tcvsn.org.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/in-memory">
              <Button
                raised
                color="primary"
                style={{ marginTop: 24, marginLeft: 16 }}
              >
                <Favorite style={{ marginRight: 7, height: 16, width: 16 }} />
                In Memory
              </Button>
            </Link>
            <Link to="/about">
              <Button raised color="primary" style={{ marginTop: 24 }}>
                <Help style={{ marginRight: 7, height: 16, width: 16 }} />
                About
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
export default withRoot(withDrawer(withStyles(styles)(SimpleMediaCard)))
