import { SET_FAVORITES } from '../constants'
import { append, contains, reject, equals } from 'ramda'
export function toggleFavorite(dispatch, getState) {
  const { currentResource } = getState()
  if (window.localStorage.getItem('favorites')) {
    const favorites = JSON.parse(window.localStorage.getItem('favorites'))
    const newFavorites = contains(currentResource._id, favorites)
      ? reject(equals(currentResource._id), favorites)
      : append(currentResource._id, favorites)

    window.localStorage.setItem('favorites', JSON.stringify(newFavorites))

    dispatch({
      type: SET_FAVORITES,
      payload: newFavorites
    })
  } else {
    window.localStorage.setItem(
      'favorites',
      JSON.stringify([currentResource._id])
    )
    dispatch({ type: SET_FAVORITES, payload: [currentResource._id] })
  }
}
