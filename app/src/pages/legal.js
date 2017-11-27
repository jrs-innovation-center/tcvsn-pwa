import React from 'react'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { Link } from 'react-router-dom'
import PaperSheet from '../components/paperSheet'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import Gavel from 'material-ui-icons/Gavel'
import Help from 'material-ui-icons/Help'
import Favorite from 'material-ui-icons/Favorite'
import Avatar from 'material-ui/Avatar'
import { CardHeader } from 'material-ui/Card'

const legalText = [
  {
    text: (
      <CardHeader
        style={{ paddingTop: 4, paddingBottom: 16 }}
        avatar={
          <Avatar>
            <Gavel />
          </Avatar>
        }
        title="Legal Disclaimer"
      />
    ),
    style: 'paragraph',
    bottomMargin: false
  },
  {
    text: `The organizations and individuals listed in this directory cannot
              and do not guarantee that they can provide assistance, but each of
              us are 'committed' to doing everything within our charters and
              organizations, bylaws, governing Federal-State-Local laws and
              rules-regulations, and resolve to do whatever we can that is
              legal, moral, and ethical and within in our resources and
              approvals processes to help those in need. Everyone and every
              organization in this directory is devoted to trying to help our
              beloved wounded, ill, injured, and needy troops and disabled
              veterans, veterans, and their families.`,
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text: `Although most of the
            services in this directory are free, some are not free. For example
            (and just one example) there are some co-pays for medications
            under hospice for Medicare covered hospice patients. However, all
            the organizations and individuals listed here are committed to
            help in every way possible and to make sure if there are any fees
            associated with their assistance that they are fully disclosed up
            front and before there are any charges accrued.`,
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text: `New organizations that wish to become a member of the Tri-County Veteran Support
            Network may submit contact information, mission statement, an website address (if applicable) via e-mail to tim@tcvsn.org.`,
    style: 'paragraph',
    bottomMargin: false
  }
]

const Legal = props => {
  return (
    <div>
      <MenuAppBar title="Legal" />
      <div className="container">
        <PaperSheet data={legalText} />
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <Button raised color="primary" style={{ marginTop: 16 }}>
            <Help style={{ marginRight: 7, height: 16, width: 16 }} />
            About
          </Button>
        </Link>
        <Link to="/in-memory" style={{ textDecoration: 'none' }}>
          <Button
            raised
            color="primary"
            style={{ marginTop: 16, marginLeft: 15 }}
          >
            <Favorite style={{ marginRight: 7, height: 16, width: 16 }} />
            In Memory
          </Button>
        </Link>
      </div>
    </div>
  )
}

const connector = connect(
  state => state,
  dispatch => {
    return {
      toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' })
    }
  }
)

export default withRoot(withDrawer(connector(Legal)))
