import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'
import PaperSheet from '../components/paperSheet'
import sig from '../sig.jpg'
import Favorite from 'material-ui-icons/Favorite'
import Legal from 'material-ui-icons/Gavel'

const aboutText = [
  {
    text:
      'This directory consists of many organizations filled with dedicated men and women committed to serving our veterans and families of the Charleston Tri-County area.',
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'There can be no doubt that the people of the Charleston Tri-County community care a great deal for our warriors. We are grateful for the sacrifices of our veterans and their families. Now, please receive our gratitude and our desire to serve you with that same spirit of excellence.',
    style: 'paragraph',
    bottomMargin: true
  },
  {
    text:
      'We wish to thank Jeanne Carmichael and Eileen Hadbavny of the American Red Cross and LTC Larry Dandridge of AUSA for their contributions in laying a solid foundation in this effort. We also want to thank Family Services, Inc. for their wonderful support in this project and, in particular, the tremendous efforts of Jordan Hardy.',
    style: 'paragraph',
    bottomMargin: true
  },

  {
    text: <img src={sig} width="200" height="auto" />,
    style: 'italic',
    bottomMargin: false
  },

  { text: 'Charles C. Baldwin', style: 'italic', bottomMargin: false },
  {
    text: 'Chaplain, Major General USAF (ret) Board of Directors',
    style: 'italic',
    bottomMargin: false
  },
  { text: 'US Vet Corps Resources', style: 'italic', bottomMargin: false }
]

const About = props => {
  return (
    <div>
      <MenuAppBar title="About" />
      <div className="container">
        <PaperSheet data={aboutText} />
        <Button
          href="/in-memory"
          raised
          color="primary"
          style={{ marginTop: 24 }}
        >
          <Favorite style={{ marginRight: 7, height: 16, width: 16 }} />
          In Memory
        </Button>
        <Button
          raised
          color="primary"
          style={{ marginTop: 24, marginLeft: 16 }}
        >
          <Legal style={{ marginRight: 7, height: 16, width: 16 }} />
          Legal
        </Button>
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

export default withRoot(withDrawer(connector(About)))
