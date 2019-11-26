export const SIGNIN = 'SIGNIN'

export const signin = (hash) => {
  return { type: SIGNIN, hash}
}