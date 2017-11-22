import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'
import PaperSheet from '../components/paperSheet'
import Eileen from '../eileen.jpg'
import About from 'material-ui-icons/Help'
import Legal from 'material-ui-icons/Gavel'
import { Link } from 'react-router-dom'

const aboutText = [
  {
    text: (
      <img
        alt="eileen"
        src={Eileen}
        className="eileen"
        width="250"
        height="auto"
      />
    ),
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'Eileen passed away in her sleep on January 24, 2017 after a long battle with cancer. After 28 years of distinguished military service with the US Air Force Reserve Nurse Corps, taking her to numerous global hot spots, Eileen continued to dedicate herself to the service of her fellow Veterans and families. Among her many accolades, Eileen was presented the Presidential Call to Service Award by President George W. Bush, honoring her example of service to Veterans in performing over 20,000 Red Cross volunteer hours with the Service to the Armed Forces (SAF) and International Services at the American Red Cross Lowcountry Chapter. Eileen, we love and appreciate you and will miss you dearly. Well done good and faithful servant. You ran the race until the very end.',
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'Service is giving of yourself, touching the lives of others without wanting personal gain. You do it because it’s the right thing to do.',
    style: 'italic',
    bottomMargin: false
  },

  {
    text: '- Eileen Hadbavny',
    style: 'paragraph',
    bottomMargin: false
  }
]

const InMemory = props => {
  return (
    <div>
      <MenuAppBar title="In Memory" />
      <div className="container">
        <PaperSheet data={aboutText} />
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <Button raised color="primary" style={{ marginTop: 16 }}>
            <About style={{ marginRight: 7, height: 16, width: 16 }} />
            About
          </Button>
        </Link>
        <Link to="/legal" style={{ textDecoration: 'none' }}>
          <Button
            raised
            color="primary"
            style={{ marginTop: 16, marginLeft: 16 }}
          >
            <Legal style={{ marginRight: 7, height: 16, width: 16 }} />
            Legal
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

export default withRoot(withDrawer(connector(InMemory)))
