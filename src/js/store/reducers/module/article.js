import * as types from '../../constants/types'

const initState = {

    article: {
        specialName: '',
        tagName: '',
        author: '',
        title: '',
        specialId: '',
        pageNum: 1,
        pageSize: 10
    }

}


export function article(state=initState, action) {

    switch(action.type){
      case types.GET_ARTICLE_LIST:
        return {
          ...state,
          article: action.payload
        }
      
      default:
        return state
    }
}


