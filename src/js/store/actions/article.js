import * as types from '../constants/types'


export function selectArticleList(data) {
    return {
      type: types.GET_ARTICLE_LIST,
      payload: data
    }
  }


