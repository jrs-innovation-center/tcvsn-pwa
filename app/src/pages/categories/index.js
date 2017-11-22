import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { Typography, List } from 'material-ui'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Button } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import CategoryItem from '../../components/category-item'
import { Link } from 'react-router-dom'

const Categories = props => {
  return (
    <div>
      <MenuAppBar title="Categories" search />
      <Typography />
      <List style={{ marginTop: 4 }}>
        {map(CategoryItem, props.categories)}
      </List>
      <Link to="/categories/new">
        <Button fab color="primary" aria-label="add" className="fab-button">
          <AddIcon />
        </Button>
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return { categories: state.categories }
}

const connector = connect(mapStateToProps)

export default withRoot(withDrawer(connector(Categories)))
