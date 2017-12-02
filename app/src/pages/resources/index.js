import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'

import { connect } from 'react-redux'
import { map, sortBy, prop } from 'ramda'
import List from 'material-ui/List'
import ResourceItem from '../../components/resource-item'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'
import { setResources } from '../../action-creators/resources'

const sorter = sortBy(prop('name'))

// props.resources === []
class Resources extends React.Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <MenuAppBar title="Resources" search />
        <List style={{ padding: 0, marginBottom: 60 }}>
          {map(
            resource => <ResourceItem key={resource._id} resource={resource} />,
            sorter(this.props.resources)
          )}
        </List>
        {this.props.isAuthenticated() && (
          <Link to="/resources/new">
            <Button fab color="primary" aria-label="add" className="fab-button">
              <AddIcon />
            </Button>
          </Link>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { resources: state.resources }
}
const mapActionsToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(setResources)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(Resources)))
