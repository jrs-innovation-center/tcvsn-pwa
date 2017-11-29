import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import CategoryForm from '../../components/category-form'
import { connect } from 'react-redux'
import { createCategory, isActive } from '../../action-creators/categories'
import { UPDATE_NEW_FORM } from '../../constants'

class NewCategory extends React.Component {
  componentDidMount() {
    this.props.isSubmitActive()
  }
  render() {
    return (
      <div>
        <MenuAppBar title="Add Category" search goBack {...this.props} />
        <CategoryForm {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch({ type: UPDATE_NEW_FORM, payload: { [field]: value } })
      dispatch(isActive)
    },
    createCategory: e => {
      e.preventDefault()
      dispatch(createCategory)
    },
    isSubmitActive: () => dispatch(isActive)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(NewCategory)))
