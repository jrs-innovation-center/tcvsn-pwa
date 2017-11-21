import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'

import { connect } from 'react-redux'
import { map } from 'ramda'
import List from 'material-ui/List'
import ResourceItem from '../../components/resource-item'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'

// props.resources === []
const Resources = props => {
  console.log(props)
  return (
    <div>
      <MenuAppBar title="Resources" search />
      <List style={{ marginTop: 4 }}>{map(ResourceItem, props.resources)}</List>
      <Link to="/resources/new">
        <Button fab color="primary" aria-label="add" className="fab-button">
          <AddIcon />
        </Button>
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return { resources: state.resources }
}

const connector = connect(mapStateToProps)

export default withRoot(withDrawer(connector(Resources)))
