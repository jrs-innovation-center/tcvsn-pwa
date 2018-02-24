import React from 'react'
import { Link } from 'react-router-dom'
//import withRoot from '../components/withRoot'
import withDrawer from '../components/withDrawer'
import MenuAppBar from '../components/menuAppBar'
import { connect } from 'react-redux'
import { filter, contains, map } from 'ramda'
import Typography from 'material-ui/Typography'
import List from 'material-ui/List'
import Button from 'material-ui/Button'
import ResourceItem from '../components/resource-item'
import Container from 'react-declarative-container'
import { cond, always, T, isEmpty } from 'ramda'

const ListFavorites = ({ favorites }) => (
  <List style={{ padding: 0, marginBottom: 60 }}>
    {map(favorite => <ResourceItem resource={favorite} />, favorites)}
  </List>
)

const Welcome = () => (
  <div style={{ padding: 48 }}>
    <center>
      <img src="/tcvsn-ico.png" />
      <Typography variant="display4">
        Welcome to Veteran Support Resource App
      </Typography>
      <div>
        <Link to="/categories">
          <Button variant="raised" color="primary">
            Categories
          </Button>
        </Link>
      </div>
    </center>
  </div>
)

const Home = props => {
  return (
    <Container
      didMount={() => {
        props.toggleDrawer()
      }}
    >
      {() => (
        <div>
          <MenuAppBar title="Home" />
          {cond([
            [isEmpty, always(<Welcome />)],
            [T, always(<ListFavorites favorites={props.favorites} />)]
          ])(props.favorites)}
        </div>
      )}
    </Container>
  )
}

const connector = connect(
  state => {
    return {
      favorites: filter(
        resource => contains(resource._id, state.favorites),
        state.resources
      )
    }
  },
  dispatch => {
    return {
      toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' })
    }
  }
)
export default withDrawer(connector(Home))
