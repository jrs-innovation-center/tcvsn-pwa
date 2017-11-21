import { prop, path, compose, last, split } from 'ramda'

export const getURLPathID = props => {
  console.log('props', props)
  return prop('match')(props)
    ? path(['match', 'params', 'id'])(props)
    : compose(last, split('/'), path(['location', 'pathname']))(props)
}
