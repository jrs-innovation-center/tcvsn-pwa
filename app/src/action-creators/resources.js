import fetch from 'isomorphic-fetch'
import {
  SET_RESOURCES,
  SET_CURRENT_RESOURCE,
  SET_EDIT_RESOURCE,
  UPDATE_NEW_RES_FORM,
  IS_ACTIVE,
  ERROR,
  ONCHANGE_EDIT_RES_FORM
} from '../constants'
import { isEmpty, assoc } from 'ramda'
import history from '../history'
const url = process.env.REACT_APP_BASE_URL

export const setResources = async (dispatch, getState) => {
  const response = await fetch(`${url}/resources`).then(res => res.json())
  dispatch({ type: SET_RESOURCES, payload: response })
}
export const deleteResource = id => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'DELETE'
  const response = await fetch(`${url}/resources/${id}`, {
    method,
    headers
  }).then(res => res.json())
  if (!response.ok) {
    dispatch({ type: ERROR, payload: 'Could not delete resource' })
    return
  }
  dispatch(setResources)
  history.push('/resources')
}

export const setCurrentResource = id => async (dispatch, getState) => {
  const response = await fetch(`${url}/resources/${id}`).then(res => res.json())
  dispatch({
    type: SET_CURRENT_RESOURCE,
    payload: assoc('confirmDelete', false, response)
  })
}

export const updateNewForm = (field, value) => (dispatch, getState) => {
  dispatch({ type: UPDATE_NEW_RES_FORM, payload: { [field]: value } })
}

export const onChangeEditForm = (field, value) => (dispatch, getState) => {
  dispatch({ type: ONCHANGE_EDIT_RES_FORM, payload: { [field]: value } })
}

export const addNewResource = (data, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(data)

  const result = await fetch(`${url}/resources`, {
    headers,
    method,
    body
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setResources)
    // dispatch({ type: IS_ACTIVE, payload: true })
    history.push('/resources')
  } else {
    // handle error
  }
}

export const setEditResource = id => async (dispatch, getState) => {
  const response = await fetch(`${url}/resources/${id}`).then(res => res.json())
  dispatch({ type: SET_EDIT_RESOURCE, payload: response })
  dispatch(isActive)
}

export const addEditResource = (data, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'PUT'
  const body = JSON.stringify(data)

  const result = await fetch(`${url}/resources/${data._id}`, {
    headers,
    method,
    body
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setResources)
    // dispatch({ type: IS_ACTIVE, payload: true })
    history.push('/resources/' + data._id)
  } else {
    // handle error
  }
}

export const isActive = async (dispatch, getState) => {
  const currentData = !isEmpty(getState().newResource.formalName)
    ? getState().newResource
    : getState().editResource
  const { categoryId, formalName, name, shortDesc, purpose } = currentData

  if (
    isEmpty(categoryId) ||
    isEmpty(formalName) ||
    isEmpty(name) ||
    isEmpty(shortDesc) ||
    isEmpty(purpose)
  ) {
    dispatch({ type: IS_ACTIVE, payload: true })
  } else {
    dispatch({ type: IS_ACTIVE, payload: false })
  }
}
