import {
  ADD_ARTICLE_CONTENT,
} from '../mutation-types'

const initialState = {
  list: [],
  param: {
    poetryName: '',
    fPoetryName: '',
    poetryArticl: '',
    poetryArticlEdit: '',
  },
}

const mutations = {
  [ADD_ARTICLE_CONTENT](state, data) {
    state.list = data.list
  },
}

export default {
  state: initialState,
  mutations,
}
