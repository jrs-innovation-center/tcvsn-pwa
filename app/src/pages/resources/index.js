import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { Typography } from 'material-ui'
import { connect } from 'react-redux'
import { map } from 'ramda'

const li = resource => {
  return (
    <li key={resource._id}>
      <Typography type="title">{resource.name}</Typography>
    </li>
  )
}

// props.resources === []
const Resources = props => {
  return (
    <div>
      <MenuAppBar title="Resources" search={true} />
      <Typography>Resources</Typography>
      <ul>{map(li, props.resources)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { resources: state.resources }
}

const connector = connect(mapStateToProps)

export default withRoot(withDrawer(connector(Resources)))
