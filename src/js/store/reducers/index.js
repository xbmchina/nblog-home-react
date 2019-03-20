import { combineReducers } from 'redux'
import { user } from './module/user'
import { comments } from './module/comments'
import { article } from './module/article.js'
const rootReducer = combineReducers({
  user,
  comments,
  article,
})
export default rootReducer
