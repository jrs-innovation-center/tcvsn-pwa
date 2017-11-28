import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'
import { setCurrentResource } from '../../action-creators/resources'
import ResourceCard from '../../components/resource-card'
import Button from 'material-ui/Button'
import PhoneIcon from 'material-ui-icons/Phone'
import { Link } from 'react-router-dom'
import SecondaryMenu from '../../components/secondaryMenu'

// props.resources === []
class ShowResource extends React.Component {
  state = { expanded: false }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.setCurrentResource(id)
    //console.log('this.props', this.props)
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const currentID = pathOr('', ['currentResource', '_id'], this.props)

    const menuItemActions = [
      {
        name: 'Edit',
        link: `/resources/${this.props.currentResource._id}/edit`
      },
      {
        name: 'Delete',
        link: `/resources/${this.props.currentResource._id}/delete`
      }
    ]

    if (this.props.match.params.id === currentID) {
      return (
        <div>
          <MenuAppBar
            title={this.props.currentResource.name}
            search={true}
            goBack={'/resources'}
            secondaryMenu={
              <SecondaryMenu actions={menuItemActions} {...this.props} />
            }
            {...this.props}
          />
          <ResourceCard data={this.props.currentResource} />
          <Link to={`/resources/${this.props.currentResource._id}/edit`}>
            <Button
              fab
              color="secondary"
              aria-label="call"
              className="fab-button"
            >
              <PhoneIcon />
            </Button>
          </Link>
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
