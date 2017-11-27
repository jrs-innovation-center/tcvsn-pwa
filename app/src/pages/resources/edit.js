import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import ResourceForm from '../../components/resource-edit'
import { connect } from 'react-redux'
import { map, pathOr } from 'ramda'
import {
  updateEditForm,
  addEditResource,
  setEditResource,
  isActive,
  onChangeEditForm
} from '../../action-creators/resources'
import { setCategories } from '../../action-creators/categories'

// props.resources === []
class EditResource extends React.Component {
  componentDidMount() {
    this.props.onMount()
    const id = this.props.match.params.id
    this.props.setEditResource(id)
    //this.props.isSubmitActive()
  }
  render() {
    return (
      <div>
        <MenuAppBar
          title="Edit Resource"
          search={true}
          goBack={true}
          {...this.props}
        />
        <ResourceForm
          onChange={this.props.onChange}
          editResource={this.props.editResource}
          onSubmit={this.props.onSubmit(
            this.props.editResource,
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
    editResource: state.editResource,
    isActive: state.isActive,
    categories: state.categories
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(onChangeEditForm(field, value))
      dispatch(isActive)
    },
    onSubmit: (data, history) => e => {
      dispatch(addEditResource(data, history))
    },
    onMount: () => dispatch(setCategories),
    setEditResource: id => dispatch(setEditResource(id)),
    isSubmitActive: () => dispatch(isActive)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(EditResource)))
