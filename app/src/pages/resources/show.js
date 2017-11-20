import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { setCurrentResource } from '../../action-creators/resources'

// props.resources === []
class ShowResource extends React.Component {
  componentDidMount() {
    console.log('this.props', this.props)
    // const id = this.props.match.params.id
    // this.props.setCurrentResource(id)
    //console.log('id', id)
  }
  render() {
    return (
      <div>
        <MenuAppBar title="Resource" search={true} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentResource: state.currentResource }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentResource: id => dispatch(setCurrentResource(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withRoot(withDrawer(connector(ShowResource)))
