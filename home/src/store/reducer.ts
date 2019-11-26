import { SIGNIN } from './action'

export const todos = (state = null, { type, hash }) => {
  switch (type) {
    case SIGNIN:
      return hash
      break;
    default:
      return state
      break;
  }
}