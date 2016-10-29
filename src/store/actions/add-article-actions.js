import {
  post
} from 'util/api'

import {
  ADD_ARTICLE_CONTENT,
} from '../mutation-types'

export function queryArticle({ dispatch, state }) {
  return new Promise((resolve, reject) => {
    /*
     * 会员类型列表
     * URL：/cardLevel/query
     * param 请求参数
     * */
    let param = state.addArticle.param
    post('/member/cardLevel/query', param).then((data) => {
      if (data.code === '0') {
        dispatch(ADD_ARTICLE_CONTENT, data.result)
        resolve(data)
      } else {
        reject(data)
      }
    }).catch((data) => {
      reject(data.description)
    })
  })
}
