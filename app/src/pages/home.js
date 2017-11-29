import React from 'react'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'

class Home extends React.Component {
  componentDidMount() {
    this.props.toggleDrawer()
  }
  render() {
    return (
      <div>
        <MenuAppBar title="Home" />
      </div>
    )
  }
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
