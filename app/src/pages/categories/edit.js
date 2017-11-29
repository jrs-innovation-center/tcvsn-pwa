import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import CategoryForm from '../../components/category-edit'
import { connect } from 'react-redux'

import {
  updateCategory,
  isActive,
  setEditCategory
} from '../../action-creators/categories'
import { ONCHANGE_EDIT_CAT_FORM } from '../../constants'

class EditCategory extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.setEditCategory(id)
    // this.props.isSubmitActive()
  }
  render () {
    return (
      <div>
        <MenuAppBar
          title='Edit Category'
          search
          goBack
          {...this.props}
        />
        <CategoryForm isActive={this.props.isActive} {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch({ type: ONCHANGE_EDIT_CAT_FORM, payload: { [field]: value } })
      dispatch(isActive)
    },
    updateCategory: data => e => {
      e.preventDefault()
      dispatch(updateCategory(data))
    },
    setEditCategory: id => dispatch(setEditCategory(id)),
    isSubmitActive: () => dispatch(isActive)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(EditCategory)))
