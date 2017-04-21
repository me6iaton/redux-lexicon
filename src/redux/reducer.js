const SET_LANG = '@@redux-lexicon/SET_LANG'

export function setLang(lang) {
  return {
    type: SET_LANG,
    payload: lang,
  }
}

const initialState = 'en'

export default function lang(state = initialState, action  = {}) {
  switch (action.type) {
      case SET_LANG:
        return action.payload
      default:
        return state
  }
}
