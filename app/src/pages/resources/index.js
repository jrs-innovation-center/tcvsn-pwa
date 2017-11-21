import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { Typography } from 'material-ui'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List from 'material-ui/List'
import ResourceItem from '../../components/resource-item'

// props.resources === []
const Resources = props => {
  console.log(props)
  return (
    <div>
      <MenuAppBar title='Resources' search />
      <List style={{ marginTop: 4 }}>{map(ResourceItem, props.resources)}</List>
    </div>
  )
}

const mapStateToProps = state => {
  return { resources: state.resources }
}

const connector = connect(mapStateToProps)

export default withRoot(withDrawer(connector(Resources)))
