import fetch from 'isomorphic-fetch'
import {
  SET_CATEGORIES,
  SET_CURRENT_CATEGORY,
  IS_ACTIVE,
  CLEAR_NEW_FORM,
  ERROR
} from '../constants'
import history from '../history'
import { isEmpty } from 'ramda'
export const setCategories = async (dispatch, getState) => {
  const response = await fetch('http://localhost:5000/categories').then(res =>
    res.json()
  )
  dispatch({ type: SET_CATEGORIES, payload: response })
  history.push('/categories')
}

export const setCurrentCategory = id => async (dispatch, getState) => {
  const response = await fetch(`http://localhost:5000/categories/${id}`).then(
    res => res.json()
  )
  dispatch({ type: SET_CURRENT_CATEGORY, payload: response })
}

export const createCategory = async (dispatch, getState) => {
  const category = getState().category
  console.log('category', category)
  const response = await fetch('http://localhost:5000/categories', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(category)
  }).then(res => res.json())

  if (!response.ok) {
    dispatch({ type: ERROR, payload: 'Could not add category' })
    return
  }
  dispatch(setCategories)
}
export const isActive = async (dispatch, getState) => {
  const { name, desc, shortDesc, icon } = getState().category
  if (isEmpty(name) || isEmpty(desc) || isEmpty(shortDesc) || isEmpty(icon)) {
    dispatch({ type: IS_ACTIVE, payload: true })
  } else {
    dispatch({ type: IS_ACTIVE, payload: false })
  }
}
