import React from 'react'
import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { pathOr, contains } from 'ramda'
import {
  setCurrentResource,
  deleteResource
} from '../../action-creators/resources'
import ResourceCard from '../../components/resource-card'
import Button from 'material-ui/Button'
import PhoneIcon from 'material-ui-icons/Phone'
import SecondaryMenu from '../../components/secondaryMenu'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import { CONFIRM_RESOURCE_DELETE } from '../../constants'
import { toggleFavorite } from '../../action-creators/favorites'

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
        link: `/resources/${this.props.currentResource._id}/edit`,
        fn: null
      },
      {
        name: 'Delete',
        link: null,
        fn: this.props.toggleConfirmDelete
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
              this.props.isAuthenticated() && (
                <SecondaryMenu actions={menuItemActions} {...this.props} />
              )
            }
            {...this.props}
          />
          <ResourceCard
            data={this.props.currentResource}
            isFavorite={this.props.isFavorite}
            toggleFavorite={this.props.toggleFavorite}
          />
          {this.props.currentResource.primaryPhone && (
            <a href={`tel:${this.props.currentResource.primaryPhone}`}>
              <Button
                fab
                color="secondary"
                aria-label="call"
                className="fab-button"
              >
                <PhoneIcon />
              </Button>
            </a>
          )}
          <Dialog
            open={this.props.currentResource.confirmDelete}
            onRequestClose={this.props.toggleConfirmDelete}
          >
            <DialogTitle>{'Delete'}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {'Are you sure you want to delete this resource?'}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.toggleConfirmDelete} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() =>
                  this.props.deleteResource(this.props.currentResource._id)
                }
                color="primary"
                autoFocus
              >
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>
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
  console.log(contains(state.currentResource._id, state.favorites))
  return {
    currentResource: state.currentResource,
    isFavorite: contains(state.currentResource._id, state.favorites)
  }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentResource: id => dispatch(setCurrentResource(id)),
    toggleConfirmDelete: () => dispatch({ type: CONFIRM_RESOURCE_DELETE }),
    deleteResource: id => dispatch(deleteResource(id)),
    toggleFavorite: () => dispatch(toggleFavorite)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default withRoot(withDrawer(connector(ShowResource)))
