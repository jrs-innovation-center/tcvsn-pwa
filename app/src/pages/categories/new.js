import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import CategoryForm from '../../components/category-form'
import { connect } from 'react-redux'
import { map, pathOr } from 'ramda'
import {
  setCurrentCategory,
  createCategory,
  isActive
} from '../../action-creators/categories'
import { UPDATE_NEW_FORM } from '../../constants'

class NewCategory extends React.Component {
  render() {
    return (
      <div>
        <MenuAppBar
          title="Add New Category"
          search={true}
          goBack={true}
          {...this.props}
        />
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

    setCurrentCategory: id => {
      dispatch(setCurrentCategory(id))
    },
    createCategory: e => {
      e.preventDefault()
      dispatch(createCategory)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(NewCategory)))
