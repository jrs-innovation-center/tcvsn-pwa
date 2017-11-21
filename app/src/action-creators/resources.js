import fetch from 'isomorphic-fetch'
import {
  SET_RESOURCES,
  SET_CURRENT_RESOURCE,
  UPDATE_NEW_FORM
} from '../constants'

export const setResources = async (dispatch, getState) => {
  const response = await fetch('http://localhost:5000/resources').then(res =>
    res.json()
  )
  dispatch({ type: SET_RESOURCES, payload: response })
}

export const setCurrentResource = id => async (dispatch, getState) => {
  const response = await fetch(
    'http://localhost:5000/resources/' + id
  ).then(res => res.json())
  dispatch({ type: SET_CURRENT_RESOURCE, payload: response })
}

export const updateNewForm = (field, value) => (dispatch, getState) => {
  dispatch({ type: UPDATE_NEW_FORM, payload: { [field]: value } })
}
