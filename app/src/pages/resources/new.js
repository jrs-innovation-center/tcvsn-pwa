import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import ResourceForm from '../../components/resource-form'
import { connect } from 'react-redux'
import { map, pathOr } from 'ramda'
import {
  setCurrentResource,
  updateNewForm
} from '../../action-creators/resources'

// props.resources === []
class NewResource extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <MenuAppBar
          title="Add New Resource"
          search={true}
          goBack={true}
          {...this.props}
        />
        <ResourceForm
          onChange={this.props.onChange}
          newResource={this.props.newResource}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { newResource: state.newResource }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentResource: id => dispatch(setCurrentResource(id)),
    onChange: (field, value) => {
      dispatch(updateNewForm(field, value))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(NewResource)))
