import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import { connect } from 'react-redux'

const Home = props => {
  return (
    <div>
      <Button raised color="primary" onClick={props.toggleDrawer}>
        Open Drawer
      </Button>
      <Button raised color="accent">
        I am the home page
      </Button>
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
export default withRoot(withDrawer(connector(Home)))
