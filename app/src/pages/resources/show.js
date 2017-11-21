import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'
import { setCurrentResource } from '../../action-creators/resources'
import ResourceCard from '../../components/resource-card'

// props.resources === []
class ShowResource extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.setCurrentResource(id)
    console.log('this.props', this.props)
  }
  render() {
    const currentID = pathOr('', ['currentResource', '_id'], this.props)
    // console.log('this.props.match.params.id', this.props.match.params.id)
    // console.log('currentID', currentID)
    // console.log('do they match?', this.props.match.params.id === currentID)

    if (this.props.match.params.id === currentID) {
      return (
        <div>
          <MenuAppBar title="Resource" search goBack {...this.props} />
          <ResourceCard data={this.props.currentResource} />
        </div>
      )
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
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
