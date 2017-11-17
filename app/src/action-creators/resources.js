import fetch from 'isomorphic-fetch'
import { SET_RESOURCES } from '../constants'

export const setResources = async (dispatch, getState) => {
  const response = await fetch('http://localhost:5000/resources').then(res =>
    res.json()
  )
  console.log('fetch response', response)
  dispatch({ type: SET_RESOURCES, payload: response })
}
