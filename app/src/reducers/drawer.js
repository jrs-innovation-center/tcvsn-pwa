import { TOGGLE_DRAWER } from '../constants'

export const drawer = (state = { open: true }, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { open: !state.open }
    default:
      return state
  }
}
