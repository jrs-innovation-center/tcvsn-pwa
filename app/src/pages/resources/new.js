import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import ResourceForm from '../../components/resource-form'
import { connect } from 'react-redux'
import {
  updateNewForm,
  addNewResource,
  isActive
} from '../../action-creators/resources'
import { setCategories } from '../../action-creators/categories'

// props.resources === []
class NewResource extends React.Component {
  componentDidMount () {
    this.props.onMount()
    this.props.isSubmitActive()
  }
  render () {
    return (
      <div>
        <MenuAppBar
          title='Add Resource'
          search
          goBack
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
          categories={this.props.categories}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newResource: state.newResource,
    isActive: state.isActive,
    categories: state.categories
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(updateNewForm(field, value))
      dispatch(isActive)
    },
    onSubmit: (data, history) => e => {
      dispatch(addNewResource(data, history))
    },
    onMount: () => {
      dispatch(setCategories)
    },
    isSubmitActive: () => dispatch(isActive)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(NewResource)))
