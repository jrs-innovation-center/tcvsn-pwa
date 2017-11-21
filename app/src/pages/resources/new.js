import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import ResourceForm from '../../components/resource-form'
import { connect } from 'react-redux'
import { map, pathOr } from 'ramda'
import { setCurrentResource } from '../../action-creators/resources'

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
        <ResourceForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  //console.log('this is STATE', state)
  return { currentResource: state.currentResource }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentResource: id => dispatch(setCurrentResource(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(NewResource)))
