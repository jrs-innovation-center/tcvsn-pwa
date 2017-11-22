import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import ResourceForm from '../../components/resource-form'
import { connect } from 'react-redux'
import { map, pathOr } from 'ramda'
import {
  setCurrentResource,
  updateNewForm,
  addNewResource,
  isActive
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
          onSubmit={this.props.onSubmit(
            this.props.newResource,
            this.props.history
          )}
          isActive={this.props.isActive}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { newResource: state.newResource, isActive: state.isActive }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentResource: id => dispatch(setCurrentResource(id)),
    onChange: (field, value) => {
      dispatch(updateNewForm(field, value))
      dispatch(isActive)
    },
    onSubmit: (data, history) => e => {
      dispatch(addNewResource(data, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(NewResource)))
