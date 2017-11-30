import React from 'react'
import fetch from 'isomorphic-fetch'
import Markdown from 'react-markdown'

import { lifecycle, compose, withReducer } from 'recompose'
import AppBar from './components/app-bar'
import { Typography, Paper } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { grey } from 'material-ui/colors'
import pkg from './package.json'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  markdown: {
    fontFamily: 'roboto',
    color: grey[700]
  }
})

const Page = ({ page, data, classes }) => (
  <div>
    <AppBar title={`${pkg.description} Docs - ${page}`} />
    <div style={{ marginTop: '70px' }}>
      <Paper className={classes.root}>
        <Markdown className={classes.markdown} source={data} />
      </Paper>
    </div>
  </div>
)

const dataReducer = withReducer(
  'data',
  'dispatch',
  (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return action.payload
      default:
        return state
    }
  },
  ''
)

const getData = lifecycle({
  componentDidMount() {
    fetch(`/${this.props.page}.md`)
      .then(res => res.text())
      .then(md => this.props.dispatch({ type: 'SET_DATA', payload: md }))
  },
  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      fetch(`/${this.props.page}.md`)
        .then(res => res.text())
        .then(md => this.props.dispatch({ type: 'SET_DATA', payload: md }))
    }
  }
})

const enhance = compose(withStyles(styles), dataReducer, getData)

export default enhance(Page)
