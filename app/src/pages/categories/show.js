import React from 'react'

import red from 'material-ui/colors/red'

//import Chevron_left from " material-ui-icons/Chevron_left";

import withRoot from '../../components/withRoot'
import withDrawer from '../../components/withDrawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { setCurrentCategory } from '../../action-creators/categories'
import { prop, pathOr, path, split, compose, last } from 'ramda'
import CategoryCard from '../../components/category-card'
import { getURLPathID } from '../../lib/url-path-helper'
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
    console.log('props', this.props)
    const currentID = getURLPathID(this.props)
    const { category } = this.props

    if (path(['currentCategory', '_id'], this.props) === currentID) {
      return (
        <div>
          <MenuAppBar
            title="Category"
            search={true}
            goBack={true}
            {...this.props}
          />
          <CategoryCard {...this.props} />
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
