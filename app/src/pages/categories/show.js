import React from 'react'

import red from 'material-ui/colors/red'

//import Chevron_left from " material-ui-icons/Chevron_left";

import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { setCurrentCategory } from '../../action-creators/categories'
import { prop, path, split, compose, last } from 'ramda'
import CategoryCard from '../../components/category-card'
import { getURLPathID } from '../../lib/url-path-helper'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'
import { Link } from 'react-router-dom'
import SecondaryMenu from '../../components/secondaryMenu'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 194
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  flexGrow: {
    flex: '1 1 auto'
  }
})

class ShowCategory extends React.Component {
  state = { expanded: false }

  componentDidMount() {
    const pathID = prop('match')(this.props)
      ? path(['match', 'params', 'id'])(this.props)
      : compose(last, split('/'), path(['location', 'pathname']))(this.props)
    this.props.getCategory(pathID)
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const currentID = getURLPathID(this.props)
    //  const { category } = this.props

    const menuItemActions = [
      {
        name: 'Edit',
        link: `/categories/${this.props.currentCategory._id}/edit`
      }
      // {
      //   name: 'Delete',
      //   link: `/categories/${this.props.currentCategory._id}/delete`
      // }
    ]

    if (path(['currentCategory', '_id'], this.props) === currentID) {
      return (
        <div>
          <MenuAppBar
            title="Category"
            search={true}
            goBack={'/categories'}
            secondaryMenu={
              <SecondaryMenu actions={menuItemActions} {...this.props} />
            }
            {...this.props}
          />
          <CategoryCard {...this.props} />
          <Link to={`/categories/${this.props.currentCategory._id}/edit`}>
            <Button
              fab
              color="secondary"
              aria-label="edit"
              className="fab-button"
            >
              <EditIcon />
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
  return { currentCategory: state.currentCategory }
}
const mapActionToProps = (dispatch, getState) => {
  return {
    getCategory: id => dispatch(setCurrentCategory(id))
  }
}

const connector = connect(mapStateToProps, mapActionToProps)
export default withRoot(withDrawer(connector(ShowCategory)))
