import React from 'react'
import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'
import { filter, contains, map } from 'ramda'
import List from 'material-ui/List'
import ResourceItem from '../components/resource-item'

class Home extends React.Component {
  componentDidMount() {
    this.props.toggleDrawer()
  }
  render() {
    return (
      <div>
        <MenuAppBar title="Home" />
        <List style={{ padding: 0, marginBottom: 60 }}>
          {map(
            favorite => <ResourceItem resource={favorite} />,
            this.props.favorites
          )}
        </List>
      </div>
    )
  }
}

const connector = connect(
  state => {
    return {
      favorites: filter(
        resource => contains(resource._id, state.favorites),
        state.resources
      )
    }
  },
  dispatch => {
    return {
      toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' })
    }
  }
)
export default withRoot(withDrawer(connector(Home)))
